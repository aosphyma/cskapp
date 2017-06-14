import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcademyPage } from './academy';

@NgModule({
  declarations: [
    AcademyPage,
  ],
  imports: [
    IonicPageModule.forChild(AcademyPage),
  ],
  exports: [
    AcademyPage
  ]
})
export class AcademyPageModule {}
