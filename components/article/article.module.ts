import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleComponent } from './article';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    IonicPageModule.forChild(ArticleComponent),
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleComponentModule {}
