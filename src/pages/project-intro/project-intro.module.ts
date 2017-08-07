import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectIntroPage } from './project-intro';

@NgModule({
  declarations: [
    ProjectIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectIntroPage),
  ],
})
export class ProjectIntroPageModule { }
