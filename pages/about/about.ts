import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLanguage(l:string){
    switch(l){
      case "English":
        this.translate.use('en');
        break;
      case "Deutsch":
        this.translate.use('de');
        break;
      case "Français":
        this.translate.use('fr');
        break;
    }
  }

  ionViewDidLoad() {

  }

}
