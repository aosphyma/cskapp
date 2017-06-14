import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ActionSheetController,
  ToastController,
  LoadingController,
  Loading,
  Platform
} from 'ionic-angular';

import {File} from '@ionic-native/file';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path';
import {Camera} from '@ionic-native/camera';

/**
 * Generated class for the GaleryformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


declare var cordova: any;

class Gallery {
  type: any;
  category: any;
  title: any;
  description: any;
  filepath: any;
  constructor(){}
}

@IonicPage()
@Component({
  selector: 'page-galeryform',
  templateUrl: 'galeryform.html',
})
export class GaleryformPage {

  gallery: Gallery = new Gallery();
  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private camera: Camera,
              private transfer: Transfer,
              private file: File,
              private filePath: FilePath,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public platform: Platform) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad GaleryformPage');
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
    this.platform.ready().then(() => {
      // they are only 3 platforms: android, ios and windows. they are all mobile
      console.log(this.platform.is('windows'));
      // debugger;
    })
  }

  galleryForm() {
    // debugger; //uses the debugger
    this.platform.ready()
      .then(() => {
      if(this.platform.is('android')){ //ios? windows phone?

      } else if(this.platform.is('ios')){

      } else {
        //Windows machine??
      }
      });
    this.gallery = new Gallery(); // TODO just to reset the parameter of the array
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType: any) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(
      (imagePath) => {
        if (this.platform.is('android') && sourceType == this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      },
      (err) => {
        this.presentToast('Error while selecting image!')
      });

  }

  private createFileName() {
    let d = new Date();
    return d.getTime() + '.jpg';
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(
      success => {
        this.lastImage = newFileName;
      },
      error => {
        this.presentToast('Error while storing Image!');
      }
    );
  }

  private presentToast(text: string) {
    this.toastCtrl.create({
      message: text,
      duration: 4000,
      position: 'top'
    }).present();
  }

  public pathForImage(img) {
    if (img == null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage() {
    // Destination URL
    var url = "http://yoururl/upload.php";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {'fileName': filename}
    };

    const fileTransfer: TransferObject = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(
      data => {
        this.loading.dismissAll()
        this.presentToast('Image succesful uploaded.');
      }, err => {
        this.loading.dismissAll()
        this.presentToast('Error while uploading file.');
      });
  }

}
