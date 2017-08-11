import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage()
@Component({
  selector: 'page-project-brochure',
  templateUrl: 'project-brochure.html',
  providers: [SharedProvider]
})
export class ProjectBrochurePage {
  public brochure: any = [];
  public projId:any;
  public formData: any = {};
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getBrochure();
  }
  getBrochure()
  {
    this.apiProvider.getProjectBrochure(this.projId).subscribe(data => {
      this.brochure = data;
    }, err => {
      console.log(err.status);
    })
  }
  downloadBrochure()
  {
    this.shared.Loader.show();
    this.formData.link = this.brochure.link;
    this.apiProvider.downloadBrochure(this.formData).subscribe(data => {
        this.shared.Loader.hide();
        this.shared.Toast.show('Please check the mail for download brochure link.');
      }, err => {
        this.shared.Loader.hide();
        this.shared.Toast.show(err);
      })
  }
}
