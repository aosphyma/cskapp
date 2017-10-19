import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home'
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';

export class Contact{
  name: string|any;
  email: string|any;
  message: string|any;
  subject: string|any;
  constructor(){}
}

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact: Contact = new Contact();
  reportURL: string = 'http://localhost/appcontrollers/report.php';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private http: Http
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Thank you for your report',
      duration: 3500,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.setRoot(HomePage);
    });

    toast.present();
  }

  contactForm(){
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post(
      this.reportURL,
      this.contact,
      options
    ).map(res => {
        return res.text();
      })
      .subscribe(content => {
        console.log(content);
        this.presentToast();
      });
  }

}
