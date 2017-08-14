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

  images = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost/appcontrollers/gdbs.php')
      .map(res => {
        return res.json().rows;
      })
      .subscribe(r => {
        this.images = r;
      });
  }

}
