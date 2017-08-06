import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaticPage } from './static';

@NgModule({
  declarations: [
    StaticPage,
  ],
  imports: [
    IonicPageModule.forChild(StaticPage),
  ],
})
export class StaticPageModule {}
