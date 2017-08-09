import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  public drawerOptions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drawerOptions = {

    };
  }

}
