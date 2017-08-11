import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage({
  name: 'ProjectSpecPage',
  segment: 'project/specification/:projId'
})
@Component({
  selector: 'page-project-spec',
  templateUrl: 'project-spec.html',
  providers: [SharedProvider]
})
export class ProjectSpecPage {
  public specifications: any = [];
  public projId: any;
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getSpecifications();
  }
  getSpecifications() {
    this.shared.Loader.show();
    this.apiProvider.getProjectSpec(this.projId).subscribe(data => {
      this.specifications = data;
      this.shared.Loader.hide();
    }, err => {
      console.log(err.status);
      this.shared.Loader.hide();
    })
  }
  openSpecDetails(specId) {
    this.navCtrl.push('ProjectSpecDetailsPage', { specId: specId, projId: this.projId })
  }
}
