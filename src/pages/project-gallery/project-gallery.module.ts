import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectGalleryPage } from './project-gallery';
import { ComponentsModule } from '../../components/components.module';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
@NgModule({
  declarations: [
    ProjectGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectGalleryPage),
    ComponentsModule,
    LazyLoadImageModule
  ],
})
export class ProjectGalleryPageModule { }
