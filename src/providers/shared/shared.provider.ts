import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, IonicApp, Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
@Injectable()
export class SharedProvider {
  private _loading;
  private _toastMsg;
  constructor(private spinnerDialog: SpinnerDialog, private platform: Platform, private _ionicApp: IonicApp, private _loadingCtrl: LoadingController, private _toastCtrl: ToastController, private _storage: Storage, private _alert: AlertController, private _socialSharing: SocialSharing, public event: Events) { }
  //Loader Start 
  public Loader = {
    show: (template?, showBackdrop?) => {
      this.spinnerDialog.show('Please wait...', template || 'Please wait', showBackdrop || true);
    },
    hide: () => {
      this.spinnerDialog.hide();
    }
  }
  public Toast = {
    show: (text: string, duration?, position?, closeButton?, btnText?) => {
      this._toastMsg = this._toastCtrl.create({
        message: text,
        duration: duration || closeButton ? null : 3000,
        position: position || 'top',
        showCloseButton: closeButton || false,
        closeButtonText: btnText || 'OK'
      });
      this._toastMsg.present();
    },
    hide() {
      this._toastMsg.dismiss();
    }
  }
  public LS = {
    get: (key: string) => {
      return this._storage.get(key);
    },
    set: (key: string, value) => {
      return this._storage.set(key, JSON.stringify(value));
    },
    remove: (key: string) => {
      return this._storage.remove(key);
    }
  }
  public Alert = {
    confirm: (msg?, title?) => {
      return new Promise((resolve, reject) => {
        let alert = this._alert.create({
          title: title || 'Confirm',
          message: msg || 'Do you want continue?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                reject(false);
              }
            },
            {
              text: 'Ok',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        alert.present();
      });

    },
    alert: (msg, title?) => {
      let alert = this._alert.create({
        title: title || 'Alert',
        subTitle: msg,
        buttons: ['Dismiss']
      });

      alert.present();
    }
  }
  public async checkIntro(component) {
    // let isIntroduced = await this.LS.get('intro');
    // isIntroduced = JSON.parse(isIntroduced); 
    // if (!isIntroduced[component]) {
    //   isIntroduced[component] = true;
    //   this.LS.set('intro', isIntroduced);
    //   if (component == 'entity') {
    //       return true;
    //   }
    //   if (this.platform.is('ios')) {
    //     this.event.publish('app:intro', appIntro.ios[component]); 
    //   } else {
    //     this.event.publish('app:intro', appIntro.android[component]); 
    //   }
    // } 
  }
  public SocialSharing = {
    shareVia: (message, subject, file?, url?) => {
      this._socialSharing.share(message, subject, file || null, url || null).then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    }
  }
}
