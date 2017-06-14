import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CskfooterComponent } from './cskfooter';

@NgModule({
  declarations: [
    CskfooterComponent,
  ],
  imports: [
    IonicPageModule.forChild(CskfooterComponent),
  ],
  exports: [
    CskfooterComponent
  ]
})
export class CskfooterComponentModule {}
