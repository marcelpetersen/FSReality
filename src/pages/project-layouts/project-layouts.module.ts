import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectLayoutsPage } from './project-layouts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectLayoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectLayoutsPage),
    ComponentsModule
  ]
})
export class ProjectLayoutsPageModule { }
