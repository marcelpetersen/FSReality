import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleVisitPage } from './schedule-visit';

@NgModule({
  declarations: [
    ScheduleVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleVisitPage),
  ],
})
export class ScheduleVisitPageModule {}
