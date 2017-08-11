import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectWalkthroughPage } from './project-walkthrough';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProjectWalkthroughPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectWalkthroughPage),
    ComponentsModule
  ],
})
export class ProjectWalkthroughPageModule {}
