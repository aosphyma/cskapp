import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CskarticleComponent } from './cskarticle';

@NgModule({
  declarations: [
    CskarticleComponent,
  ],
  imports: [
    IonicPageModule.forChild(CskarticleComponent),
  ],
  exports: [
    CskarticleComponent
  ]
})
export class CskarticleComponentModule {}
