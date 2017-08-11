import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectGalleryPage } from './project-gallery';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProjectGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectGalleryPage),
    ComponentsModule
  ],
})
export class ProjectGalleryPageModule {}
