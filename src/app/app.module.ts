import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing'
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExtendMenuProvider } from '../providers/extend-menu/extend-menu';
import { SharedProvider } from '../providers/shared/shared.provider';
import { ApiProvider } from '../providers/api/api.provider';
import { ConfigProvider } from '../providers/config';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    SocialSharing
  ]
})
export class AppModule { }
