import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {Http, /*RequestMethod, RequestOptions, Headers*/ } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  home: FirebaseListObservable<any>;
  articles = [];

  constructor(public navCtrl: NavController, public afb: AngularFireDatabase, public http: Http) {
    this.home = afb.list('/Slides');
  }

  ionViewDidLoad() {
    this.http.get('http://localhost/appcontrollers/adbs.php')
      .map(res => {
        return res.json().data;
      })
      .subscribe(data => {
        this.articles = data
      });
  }

  goToPage(event, page:string, arg:string){
    // this.navCtrl.push()
    // console.log('now going to page ' + page + ' With an argument ' + arg);
  }
}
