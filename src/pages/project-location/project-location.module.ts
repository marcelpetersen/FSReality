import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectLocationPage } from './project-location';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectLocationPage),
    ComponentsModule
  ],
})
export class ProjectLocationPageModule { }
