import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {Http, /*RequestMethod, RequestOptions, Headers*/ } from '@angular/http';
import 'rxjs/Rx';

import { AcademyPage } from '../academy/academy';
import { CulturePage } from '../culture/culture';
import { SportPage } from '../sport/sport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  home: FirebaseListObservable<any>;
  articles = [];
  private downloadURL = 'http://localhost/appcontrollers/adbs.php';

  constructor(public navCtrl: NavController, public afb: AngularFireDatabase, public http: Http) {
    this.home = afb.list('/Slides');
  }

  ionViewDidLoad() {
    this.http.get(this.downloadURL)
      .map(res => {
        return res.json().data;
      })
      .subscribe(data => {
        this.articles = data
      });
  }

  gotoReadPage(page:string){
    switch(page){
      case 'academy':
        this.navCtrl.push(AcademyPage);
        break;
      case 'culture':
        this.navCtrl.push(CulturePage);
        break;
      case 'sport':
        this.navCtrl.push(SportPage);
        break;
      default:
        this.navCtrl.push(HomePage);
    }
  }
}
