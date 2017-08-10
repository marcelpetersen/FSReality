import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectSpecDetailsPage } from './project-spec-details';

@NgModule({
  declarations: [
    ProjectSpecDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSpecDetailsPage),
  ],
})
export class ProjectSpecDetailsPageModule {}
