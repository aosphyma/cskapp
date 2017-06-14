import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';





export class Article{
  category: any;
  title: any;
  subtitle: any;
  sd: any;
  ld: any;
  url: any;
  file: any;
  constructor(){}
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private http: Http) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticleformPage');
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
  }

  articleForm() {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post('http://localhost/appcontrollers/padbs.php', this.article, options)
      .map( res => {
        return res.json();
      })
      .subscribe(article => {
        this.article = new Article();
        this.navCtrl.setRoot(HomePage);
        console.log(article);
      });
  }

}
