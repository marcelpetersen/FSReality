import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, public shared: SharedProvider) {
    // shared.LS.get('isDisclaimerAccepted').then((data: any) => {
    //   if (!data) {
    //     this.rootPage = 'DisclaimerPage';
    //   } else {
    //     this.rootPage = 'HomePage';
    //   } 
    // });
    this.rootPage = 'HomePage';
    this.initializeApp();

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#006043');
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
    let modal = this.modalCtrl.create(view);
    modal.present();
  }
  shareApp() {
    this.shared.SocialSharing.shareVia('I found this awesome app', 'FS Orbit');
  }
}
