import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsUpdatePage } from './news-update';

@NgModule({
  declarations: [
    NewsUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsUpdatePage),
  ],
})
export class NewsUpdatePageModule { }
