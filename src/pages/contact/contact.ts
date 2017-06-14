import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



export class Contact{
  name: string|any;
  email: string|any;
  message: string|any;
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  contactForm(){
    console.log(this.contact);
    // TODO send http request
    this.contact = new Contact();
  }

}
