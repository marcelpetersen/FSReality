import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsListPage } from './projects-list';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  declarations: [
    ProjectsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsListPage),
    LazyLoadImageModule
  ],
})
export class ProjectsListPageModule { }
