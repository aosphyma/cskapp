import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleformPage } from './articleform';

@NgModule({
  declarations: [
    ArticleformPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleformPage),
  ],
  exports: [
    ArticleformPage
  ]
})
export class ArticleformPageModule {}
