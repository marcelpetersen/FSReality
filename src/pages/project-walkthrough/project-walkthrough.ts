import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
@IonicPage({
  name: 'ProjectWalkthroughPage',
  segment: 'project/walkthrough/:projId'
})
@Component({
  selector: 'page-project-walkthrough',
  templateUrl: 'project-walkthrough.html',
  providers: [SharedProvider]
})
export class ProjectWalkthroughPage {
  public walkthrough: any = [];
  public projId: any;
  public videoUrl: SafeResourceUrl;
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider, private domSanitizer: DomSanitizer) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getWalkthroughDetails();
  }
  getWalkthroughDetails()
  {
    this.shared.Loader.show();
    this.apiProvider.getWalkthroughDetails(this.projId).subscribe(data => {
      this.walkthrough = data;
      this.shared.Loader.hide();
    }, err => {
      console.log(err.status);
    })
  }
  getVideoUrl(url)
  {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    return this.videoUrl;
  }
}
