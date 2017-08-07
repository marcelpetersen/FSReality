import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorePopoverPage } from './more-popover';

@NgModule({
  declarations: [
    MorePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MorePopoverPage),
  ],
})
export class MorePopoverPageModule {}
