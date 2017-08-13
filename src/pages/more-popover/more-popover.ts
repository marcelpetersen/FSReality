import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more-popover',
  templateUrl: 'more-popover.html',
})
export class MorePopoverPage {
  public projId: any;
  public activePage: string;
  public iconPath: string = 'assets/icon/project-menu/';
  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.projId = navParams.get('projId');
    this.activePage = navParams.get('activePage');
  }
  pushPage(page: string, projId) {
    this.events.publish('pushPage', { target: page, projId: projId });
    this.viewCtrl.dismiss();
  }
}
