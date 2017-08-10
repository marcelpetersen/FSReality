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
  pushPage(page: string, projId) {
    this.navCtrl.push(page, { projId: projId })
  }
}
