import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectBrochurePage } from './project-brochure';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProjectBrochurePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectBrochurePage),
    ComponentsModule
  ],
})
export class ProjectBrochurePageModule {}
