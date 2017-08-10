import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectSpecPage } from './project-spec';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectSpecPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSpecPage),
    ComponentsModule
  ],
})
export class ProjectSpecPageModule { }
