import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-project-intro',
  templateUrl: 'project-intro.html',
})
export class ProjectIntroPage {
   @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
   @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {

  }

  presentPopover( ) {
console.log('pop');
  ;
    let pop = this.popoverCtrl.create('MorePopoverPage');

let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: '50' 
      };
    }
  }
};

pop.present({ev});
  }
}
