import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectUpdatesPage } from './project-updates';
import { ComponentsModule } from '../../components/components.module';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  declarations: [
    ProjectUpdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectUpdatesPage),
    ComponentsModule,
    LazyLoadImageModule

  ],
})
export class ProjectUpdatesPageModule { }
