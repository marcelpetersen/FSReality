import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage()
@Component({
  selector: 'page-project-spec-details',
  templateUrl: 'project-spec-details.html',
  providers: [SharedProvider]
})
export class ProjectSpecDetailsPage {
  public specification: any = [];
  private _specId: any;
  public projId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this._specId = navParams.get('specId');
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getSpecDetails();
  }
  getSpecDetails() {
    this.shared.Loader.show();
    this.apiProvider.getSpecDetails(this._specId, this.projId).subscribe(data => {
      this.specification = data;
      this.shared.Loader.hide();
    }, err => {
      console.log(err.status);
      this.shared.Loader.hide();
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
