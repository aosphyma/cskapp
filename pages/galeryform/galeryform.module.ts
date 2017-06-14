import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GaleryformPage } from './galeryform';

@NgModule({
  declarations: [
    GaleryformPage,
  ],
  imports: [
    IonicPageModule.forChild(GaleryformPage),
  ],
  exports: [
    GaleryformPage
  ]
})
export class GaleryformPageModule {}
