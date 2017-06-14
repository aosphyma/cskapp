import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportPage } from './sport';

@NgModule({
  declarations: [
    SportPage,
  ],
  imports: [
    IonicPageModule.forChild(SportPage),
  ],
  exports: [
    SportPage
  ]
})
export class SportPageModule {}
