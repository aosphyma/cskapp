import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { AcademyPage } from '../pages/academy/academy';
import { ContactPage } from '../pages/contact/contact';
import { CulturePage } from '../pages/culture/culture';
import { InfoPage } from '../pages/info/info';
import { SportPage } from '../pages/sport/sport';
import { GalleryPage } from '../pages/gallery/gallery';
import { AdminPage } from '../pages/admin/admin';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Academy', component: AcademyPage },
      { title: 'Culture', component: CulturePage },
      { title: 'Sport', component: SportPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Informations', component: InfoPage },
      { title: 'Contact', component: ContactPage },
      { title: 'About', component: AboutPage },
      { title: 'Admin Panel', component: AdminPage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // ionViewDidLoad(){
  //   if(document.body.clientWidth > 767) {
  //     let menu_content = document.querySelectorAll('ion-nav')[0].className + " menu-content-open";
  //     let menu = document.querySelectorAll('ion-menu')[0].className + " show-menu";
  //     document.querySelectorAll('ion-menu')[0].className = menu;
  //     document.querySelectorAll('ion-nav')[0].className = menu_content;
  //   }
  //   else{
  //     console.log('shorter');
  //   }
  // }
  ionViewDidEnter(){
    if(document.body.clientWidth > 767) {
      document.querySelectorAll('ion-menu')[0].classList.add('show-menu');
      document.querySelectorAll('ion-nav')[0].classList.add('menu-content-open');
    }
    else{
      console.log('shorter');
    }
  }
}
