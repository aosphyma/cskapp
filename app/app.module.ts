import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AcademyPage } from '../pages/academy/academy';
import { ContactPage } from '../pages/contact/contact';
import { CulturePage } from '../pages/culture/culture';
import { InfoPage } from '../pages/info/info';
import { SportPage } from '../pages/sport/sport';
import { GalleryPage } from '../pages/gallery/gallery';
import { ImagesPage } from '../pages/images/images';
import { VideosPage } from '../pages/videos/videos';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { ArticleformPage } from '../pages/articleform/articleform';
import { SigninformPage } from '../pages/signinform/signinform';
import { SignupformPage } from '../pages/signupform/signupform';
import { GaleryformPage } from '../pages/galeryform/galeryform';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SliderComponent } from '../components/slider/slider';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule/*, AngularFireAuthProvider*/ } from 'angularfire2/auth';
import { CskarticleComponent } from '../components/cskarticle/cskarticle';
import { TestdirectiveDirective } from '../directives/testdirective/testdirective';

import { IonicStorageModule } from '@ionic/storage';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import {FileTransfer} from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { HttpModule, Http } from '@angular/http'
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CavidComponent } from '../components/cavid/cavid';
import { CalinkComponent } from '../components/calink/calink';
import { CabothComponent } from '../components/caboth/caboth';
import { CaallComponent } from '../components/caall/caall';



export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}



const config = {
  apiKey: "AIzaSyD_YHZux2kNLIycjFc8zu5Jso79MvaS0m4",
  authDomain: "cskapp-156b9.firebaseapp.com",
  databaseURL: "https://cskapp-156b9.firebaseio.com",
  projectId: "cskapp-156b9",
  storageBucket: "cskapp-156b9.appspot.com",
  messagingSenderId: "918275770697"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcademyPage,
    CulturePage,
    SportPage,
    GalleryPage,
    ImagesPage,
    VideosPage,
    InfoPage,
    ContactPage,
    AboutPage,
    TabsPage,
    AdminPage,
    ArticleformPage,
    SigninformPage,
    SignupformPage,
    GaleryformPage,
    SliderComponent,
    CskarticleComponent,
    TestdirectiveDirective,
    CavidComponent,
    CalinkComponent,
    CabothComponent,
    CaallComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcademyPage,
    CulturePage,
    SportPage,
    GalleryPage,
    ImagesPage,
    VideosPage,
    InfoPage,
    ContactPage,
    AboutPage,
    TabsPage,
    AdminPage,
    ArticleformPage,
    SigninformPage,
    SignupformPage,
    GaleryformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    FileTransfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
