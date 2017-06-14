import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



export class Signup{
  email: string|any;
  password: string|any;
  password2: string|any;
  constructor(){}
}

// import { Storage } from '@ionic/storage'

/**
 * Generated class for the SignupformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signupform',
  templateUrl: 'signupform.html',
})
export class SignupformPage {

  signup: Signup = new Signup();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignupformPage');
    this.viewCtrl.setBackButtonText(this.navParams.get('from'));
  }

  signupForm(){
    console.log(this.signup);
    this.signup = new Signup();
  }

}
