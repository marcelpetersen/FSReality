import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing'
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExtendMenuProvider } from '../providers/extend-menu/extend-menu';
import { SharedProvider } from '../providers/shared/shared.provider';
import { ApiProvider } from '../providers/api/api.provider';
import { ConfigProvider } from '../providers/config';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      iconMode: 'md',
      backButtonText: '',
      backButtonIcon: 'md-arrow-back'
    }),
    IonicStorageModule.forRoot(),
    ionicGalleryModal.GalleryModalModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ExtendMenuProvider,
    SharedProvider,
    ApiProvider,
    ConfigProvider,
    SocialSharing,
    SpinnerDialog,
    { provide: HAMMER_GESTURE_CONFIG, useClass: ionicGalleryModal.GalleryModalHammerConfig }
  ]
})
export class AppModule { }
