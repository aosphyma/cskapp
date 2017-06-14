import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninformPage } from './signinform';

@NgModule({
  declarations: [
    SigninformPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninformPage),
  ],
  exports: [
    SigninformPage
  ]
})
export class SigninformPageModule {}
