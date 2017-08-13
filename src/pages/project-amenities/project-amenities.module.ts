import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectAmenitiesPage } from './project-amenities';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectAmenitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectAmenitiesPage),
    ComponentsModule
  ],
})
export class ProjectAmenitiesPageModule { }
