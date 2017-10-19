import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  Loading,
  Platform
} from 'ionic-angular';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';
import {GalleryPage} from "../gallery/gallery";

/**
 * Generated class for the GaleryformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


class Gallery {
  type: any;
  category: any;
  title: any;
  description: any;
  fileName: any;

  constructor() {
  }
}

@IonicPage()
@Component({
  selector: 'page-galeryform',
  templateUrl: 'galeryform.html',
})
export class GaleryformPage {

  gallery: Gallery = new Gallery();
  loading: Loading;
  formData: FormData;
  uploadURL = 'http://localhost/appcontrollers/pgdbs.php';
  fileUploadURL = 'http://localhost/appcontrollers/fileupload.php';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform,
              private http: Http
  ) {}

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
    this.platform.ready().then(() => {
      // they are only 3 platforms: android, ios and windows. they are all mobile
      console.log(this.platform.is('windows'));
      // todo uses the debugger
      // debugger;
    })
  }

  fileEvent(fileInput: any){
    this.formData = new FormData();
    this.formData.append('file', fileInput.target.files[0]);
    this.gallery.fileName = fileInput.target.files[0].name;
  }

  galleryForm() {
    if (this.formData != null) {
      if (this.formData.get('file') != null) {
        this.fileUpload();
      }
    }
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post(
      this.uploadURL,
      this.gallery,
      options)
      .map(res => {
        return res.json();
      })
      .subscribe(status => {
        this.navCtrl.setRoot(GalleryPage);
      });
  }

  fileUpload() {
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http.post(
      this.fileUploadURL,
      this.formData,
      options)
      .map(res => {
        return res;
      })
      .subscribe(status => {
      });
  }
}
