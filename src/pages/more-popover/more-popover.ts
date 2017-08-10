import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more-popover',
  templateUrl: 'more-popover.html',
})
export class MorePopoverPage {
  public projId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePopoverPage');
  }
  openSpecifications(projId){
    this.navCtrl.push('ProjectSpecPage', { projId: projId })
  }
  openAmenities(projId)
  {
    this.navCtrl.push('ProjectAmenitiesPage', { projId: projId });
  }
  openLayouts(projId)
  {
    this.navCtrl.push('ProjectLayoutsPage', { projId: projId });
  }
  openGallery(projId)
  {
    this.navCtrl.push('ProjectGalleryPage', { projId: projId });
  }
}
