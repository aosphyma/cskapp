import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import { Http } from '@angular/http';
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

  data: Array<any>;
  image1: any;
  image2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ImagesPage');
    this.http.get('http://localhost/testDB/gdbs.php') // must start apache (and mysql) server to get it work
      .map(res => {
        return res.json().rows;
      })
      .subscribe(data => {
        // console.log(data);
        this.data = data;
      });
  }

}
