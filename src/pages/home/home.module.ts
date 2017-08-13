import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    LazyLoadImageModule
  ],
})
export class HomePageModule { }
