import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'popover-header',
  templateUrl: 'popover-header.html'
})
export class PopoverHeaderComponent {

  @Input('projectId') projId: any;
  @Input('title') title: any;
  constructor(public popoverCtrl: PopoverController) { }
  presentPopover() {
    let pop = this.popoverCtrl.create('MorePopoverPage', { projId: this.projId });
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: '50'
          };
        }
      }
    };
    pop.present({ ev });
  }

}
