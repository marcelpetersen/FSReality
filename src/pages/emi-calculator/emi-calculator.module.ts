import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmiCalculatorPage } from './emi-calculator';

@NgModule({
  declarations: [
    EmiCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(EmiCalculatorPage),
  ],
})
export class EmiCalculatorPageModule {}
