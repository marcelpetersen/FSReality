import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular'; 
@IonicPage()
@Component({
  selector: 'page-static',
  templateUrl: 'static.html',
})
export class StaticPage {
  public show: string;
  constructor(public ViewCtrl: ViewController, public navParams: NavParams) {
    this.show = this.navParams.get('page'); 
  }
  dismiss() {
    this.ViewCtrl.dismiss();
  }

}
