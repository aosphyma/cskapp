import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagesPage } from '../images/images';
import { VideosPage } from '../videos/videos';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = ImagesPage;
  tab2Root: any = VideosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
