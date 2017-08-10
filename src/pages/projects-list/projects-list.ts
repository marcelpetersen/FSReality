import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage({
  name: 'ProjectsListPage',
  segment: 'projects/:catId'
})
@Component({
  selector: 'page-projects-list',
  templateUrl: 'projects-list.html',
  providers: [SharedProvider]
})
export class ProjectsListPage {
  public projects: any = [];
  private _catId: any;
  public category: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this._catId = navParams.get('catId');
    this.category = navParams.get('catName');
  }

  ionViewDidLoad() {
    this.getProjects();
  }
  getProjects() {
    this.apiProvider.getProjects(this._catId).subscribe(data => {
      this.projects = data;
    }, err => {
      console.error(err);
    })
  }
  openProject(projId) {
    this.navCtrl.push('ProjectIntroPage', { projId: projId });
  }

}
