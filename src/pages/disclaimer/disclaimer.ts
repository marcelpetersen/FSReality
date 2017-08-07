import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html',
})
export class DisclaimerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public menuCtrl: MenuController) {
    menuCtrl.enable(false);
  }

  accept() {
    this.navCtrl.setRoot('HomePage');
  }
  close() {
    this.platform.exitApp();
  }

  ionViewWillUnload() {
    this.menuCtrl.enable(true);
  }
}
