import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesPage } from './images';

@NgModule({
  declarations: [
    ImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagesPage),
  ],
  exports: [
    ImagesPage
  ]
})
export class ImagesPageModule {}
