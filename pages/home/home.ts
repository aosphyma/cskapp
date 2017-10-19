import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {Http, /*RequestMethod, RequestOptions, Headers*/} from '@angular/http';
import 'rxjs/Rx';

import {AcademyPage} from '../academy/academy';
import {CulturePage} from '../culture/culture';
import {SportPage} from '../sport/sport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  home: FirebaseListObservable<any>;
  articles = [];
  articleSet0 = [];
  articleSet1 = [];
  private downloadURL = 'http://localhost/appcontrollers/adbs.php';

  constructor(public navCtrl: NavController, public afb: AngularFireDatabase, public http: Http) {
    this.home = afb.list('/Slides');
  }

  ionViewDidLoad() {
    this.http.get(this.downloadURL)
      .map(res => {
        return res.json();
      })
      .subscribe(data => {
        this.articles = data;
        let it = 0;
        while (it < this.articles.length) {
          if (typeof this.articles[it] !== 'undefined') {
            this.articleSet0.push(this.articles[it]);
          }
          if ((it + 1) <= this.articles.length) {
            if (typeof this.articles[it + 1] !== 'undefined') {
              this.articleSet1.push(this.articles[it + 1]);
            }
          }
          it += 2;
        }
      });
  }

  gotoReadPage(page: string) {
    switch (page) {
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
