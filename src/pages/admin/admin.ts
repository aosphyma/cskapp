import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleformPage } from '../articleform/articleform';
import { SignupformPage } from '../signupform/signupform';
import { SigninformPage } from '../signinform/signinform';
import { GaleryformPage } from '../galeryform/galeryform';


/**
 * Generated class for the AdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AdminPage');
  }
  openFormPage(page:string) {
    switch (page){
      case 'article':
        this.navCtrl.push(ArticleformPage, {'from' : 'Admin Panel'});
        break;
      case 'signin':
        this.navCtrl.push(SigninformPage, {'from' : 'Admin Panel'});
        break;
      case 'signup':
        this.navCtrl.push(SignupformPage, {'from' : 'Admin Panel'});
        break;
        case 'gallery':
        this.navCtrl.push(GaleryformPage, {'from' : 'Admin Panel'});
        break;
      default:
        // should not happen
        break;
    }
  }

}
