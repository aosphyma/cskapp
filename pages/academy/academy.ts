import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http, /*RequestMethod, RequestOptions, Headers*/ } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the AcademyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-academy',
  templateUrl: 'academy.html',
})
export class AcademyPage {

  articles = [];
  academy = new Array();

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
          if(it.category === 'academy'){
            this.academy.push(it);
          }
        }
        // console.log(this.academy);
      });
  }

}
