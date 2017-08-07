import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-emi-calculator',
  templateUrl: 'emi-calculator.html',
})
export class EmiCalculatorPage {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
