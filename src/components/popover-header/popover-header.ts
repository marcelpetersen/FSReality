import { Component, Input } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';

@Component({
  selector: 'popover-header',
  templateUrl: 'popover-header.html'
})
export class PopoverHeaderComponent {

  @Input('projectId') projId: any;
  @Input('title') title: any;
  constructor(public popoverCtrl: PopoverController, private navCtrl: NavController) { }
  presentPopover(ev) {
    let pop = this.popoverCtrl.create('MorePopoverPage', { projId: this.projId, activePage: this.navCtrl.getActive().name });
    pop.present({ ev });
  }

}
