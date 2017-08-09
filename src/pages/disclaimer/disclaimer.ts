import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
@IonicPage()
@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html',
  providers: [SharedProvider]
})
export class DisclaimerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public menuCtrl: MenuController, public shared: SharedProvider) {
    menuCtrl.enable(false);
  }

  accept() {
    this.shared.LS.set('isDisclaimerAccepted', true);
    this.navCtrl.setRoot('HomePage');
  }
  close() {
    this.platform.exitApp();
  }

  ionViewWillUnload() {
    this.menuCtrl.enable(true);
  }
}
