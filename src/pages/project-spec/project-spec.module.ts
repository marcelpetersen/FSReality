import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectSpecPage } from './project-spec';

@NgModule({
  declarations: [
    ProjectSpecPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSpecPage),
  ],
})
export class ProjectSpecPageModule {}
