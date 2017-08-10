import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectIntroPage } from './project-intro';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ProjectIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectIntroPage),
    ComponentsModule
  ],
})
export class ProjectIntroPageModule { }
