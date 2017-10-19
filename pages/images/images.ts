import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import { Http, RequestMethod, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the ImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {

  images = [];
  imageSet = [];
  imageSet1 = [];
  imageSet2 = [];
  imageSet3 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      // 'Content-type': 'multipart/form-data'
    });
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    this.http.post("http://localhost/appcontrollers/gdbs.php", {}, options)
      .map(res => {
        return res.json();
      })
      .subscribe(data => {
        this.images = data;
        let it = 0;
        while (it<this.images.length){
          if (typeof this.images[it] !== 'undefined'){
            this.imageSet.push(this.images[it]);
          }
          if ((it + 1) <= this.images.length){
            if (typeof this.images[it+1] !== 'undefined'){
              this.imageSet1.push(this.images[it+1]);
            }
          }
          if ((it + 2) <= this.images.length){
            if (typeof this.images[it+2] !== 'undefined'){
              this.imageSet2.push(this.images[it+2]);
            }
          }
          if ((it + 3) <= this.images.length){
            if (typeof this.images[it+3] !== 'undefined'){
              this.imageSet3.push(this.images[it+3]);
            }
          }
          it+=4;
        }
        // this.images = data;
        // console.log(this.imageSet);
        // console.log(this.imageSet1);
        // console.log(this.imageSet2);
        // console.log(this.imageSet3);
      });
  }

}
