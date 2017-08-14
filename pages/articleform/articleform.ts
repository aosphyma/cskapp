import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

// import {HomePage} from '../home/home';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';

export class Article {
  category: any;
  title: any;
  subtitle: any;
  sd: any;
  ld: any;
  url: any;
  file: any;

  constructor() {
  }
}

/**
 * Generated class for the ArticleformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-articleform',
  templateUrl: 'articleform.html',
})
export class ArticleformPage {
  article: Article = new Article();
  private uploadURL: string = 'http://localhost/appcontrollers/padbs.php';
  private fileuploadURL: string = 'http://localhost/appcontrollers/fileupload.php';
  private formData: FormData ;

  // private downloadURL: string = 'http://localhost/appcontrollers/adbs.php';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private http: Http) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleformPage');
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
  }

  fileEvent(fileInput: any) {
    this.formData = new FormData();
    this.formData.append('file', fileInput.target.files[0]);
    console.log(this.formData.get('file'))
  }

  articleForm() {
    if (this.formData.get('file') != null) {
      this.fileUpload();
    }
    let headers = new Headers({
      'Content-Type': 'application/json',
      // 'Content-type': 'multipart/form-data'
    });
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post(
      this.uploadURL,
      this.article,
      options)
      .map(res => {
        return res.json();
      })
      .subscribe(article => {
        console.log(article);
      });
  }

  fileUpload() {
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http.post(
      this.fileuploadURL,
      this.formData,
      options)
      .map(res => {
        return res;
      })
      .subscribe(uploadedStatus => {
        console.log(uploadedStatus.text());
      });
  }

}
