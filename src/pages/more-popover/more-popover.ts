import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more-popover',
  templateUrl: 'more-popover.html',
})
export class MorePopoverPage {
  public projId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.projId = navParams.get('projId');
  }
  pushPage(page: string, projId) {
    this.navCtrl.push(page, { projId: projId })
    this.viewCtrl.dismiss();
  }
}
