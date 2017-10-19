import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
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
  articleSet0 = [];
  articleSet1 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      // 'Content-type': 'multipart/form-data'
    });
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    this.http.post("http://localhost/appcontrollers/adbs.php", {category: 'academy'}, options)
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

}
