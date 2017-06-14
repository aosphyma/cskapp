import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';

import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';



export class SignIn{
  id: string| any;
  email: string| any;
  password: string| any;
  timestamp: string| any;
  constructor(){}
}

/**
 * Generated class for the SigninformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signinform',
  templateUrl: 'signinform.html',
})
export class SigninformPage {
  signin: SignIn = new SignIn();
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SigninformPage');
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
  }

  signinForm() {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post('http://localhost/appcontrollers/udbs.php', this.signin, options)
      .map( res => {
        return res.json();
      })
      .subscribe(article => {
        this.signin = new SignIn();
        this.navCtrl.setRoot(HomePage);
        console.log(article);
      });
  }

}
