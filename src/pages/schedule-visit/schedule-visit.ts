import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage()
@Component({
  selector: 'page-schedule-visit',
  templateUrl: 'schedule-visit.html',
  providers: [SharedProvider]
})
export class ScheduleVisitPage {
  public projects: any [];
  public visitDetails:any = {};
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    this.getProjects();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  getProjects()
  {
    this.apiProvider.getCrmProjects().subscribe(data => {
      this.projects = data;
    }, err => {
      console.log(err.status);
    })
  }
  scheduleVisit()
  {
    this.shared.Loader.show();
    this.apiProvider.saveCrmInquiry(this.visitDetails).subscribe(data => {
        this.shared.Loader.hide();
        this.shared.Toast.show('Enquiry submitted successfully!');
      }, err => {
        this.shared.Loader.hide();
        this.shared.Toast.show(err);
      })
  }
}
