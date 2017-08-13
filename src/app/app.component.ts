import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/shared/shared.provider';


@Component({
  templateUrl: 'app.html',
  providers: [SharedProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, public shared: SharedProvider) {
    if (platform.is('cordova')) {
      shared.LS.get('isDisclaimerAccepted').then((data: any) => {
        if (!data) {
          this.rootPage = 'DisclaimerPage';
        } else {
          this.rootPage = 'HomePage';
        }
      });
    } else {
      this.rootPage = 'HomePage';
    }
    this.initializeApp();
    events.subscribe('pushPage', (data) => {
      if (this.nav.getActive().name != data.target) {
        this.nav.push(data.target, { projId: data.projId })
      }
    })
  }
  ionViewDidLoad() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showStatic(page) {
    let modal = this.modalCtrl.create('StaticPage', { page: page });
    modal.present();
  }
  openPage(page) {
    this.nav.setRoot(page);
  }
  openModal(view: string) {
    let modal = this.modalCtrl.create(view, {}, { cssClass: view });
    modal.present();
  }
  shareApp() {
    this.shared.SocialSharing.shareVia('I found this awesome app', 'FS Orbit');
  }
}
