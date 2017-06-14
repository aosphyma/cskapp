import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupformPage } from './signupform';

@NgModule({
  declarations: [
    SignupformPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupformPage),
  ],
  exports: [
    SignupformPage
  ]
})
export class SignupformPageModule {}
