import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
@IonicPage()
@Component({
  selector: 'page-emi-calculator',
  templateUrl: 'emi-calculator.html',
  providers: [SharedProvider]
})
export class EmiCalculatorPage {
  public emiParameters: any = {};
  public result: any = { emi: null, interest: null, total: null };
  constructor(public viewCtrl: ViewController, public shared: SharedProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiCalculatorPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  calculate(form) {
    if (form.valid) {
      let loanAmount = this.emiParameters.amount;
      let rateOfInterest = this.emiParameters.percent;
      let numberOfMonths = this.emiParameters.tenure * 12;

      let monthlyInterestRatio = (rateOfInterest / 100) / 12;
      console.log(loanAmount, numberOfMonths, rateOfInterest)
      let top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
      let sp = top / (top - 1);
      let emi = ((loanAmount * monthlyInterestRatio) * sp);
      this.result.emi = this.formatNumber(Math.round(emi));
      this.result.interest = this.formatNumber(Math.round((emi * numberOfMonths) - loanAmount));
      this.result.total = this.formatNumber(Math.round(emi * numberOfMonths));
    }
    else {
      this.shared.Toast.show('All fields are mandatory.');
    }
  }

  formatNumber(number: number) {
    let x: any = number;
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }
}