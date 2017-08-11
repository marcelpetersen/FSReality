import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectUpdatesPage } from './project-updates';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectUpdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectUpdatesPage),
    ComponentsModule
    
  ],
})
export class ProjectUpdatesPageModule {}
