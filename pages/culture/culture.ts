import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http, /*RequestMethod, RequestOptions, Headers*/ } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the CulturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-culture',
  templateUrl: 'culture.html',
})
export class CulturePage {

  articles = [];
  culture = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost/appcontrollers/adbs.php')
      .map(res => {
        return res.json().data;
      })
      .subscribe(data => {
        this.articles = data;
        for(let it of this.articles){
          if(it.category === 'culture'){
            this.culture.push(it);
          }
        }
        // console.log(this.culture);
      });
  }

}
