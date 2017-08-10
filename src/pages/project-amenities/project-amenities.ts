import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
@IonicPage()
@Component({
  selector: 'page-project-amenities',
  templateUrl: 'project-amenities.html',
  providers: [SharedProvider]
})
export class ProjectAmenitiesPage {
  public amenities: any = [];
  private _projId: any;
  public segment: string = "club-house";
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider,  public apiProvider: ApiProvider) {
    this._projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getAmenities();
  }
  getAmenities()
  {
    this.apiProvider.getAmenities(this._projId).subscribe(data=> {
      this.amenities = data;
    }, err=> {
      console.log(err.status);
    })
  }
  presentPopover() {
    let pop = this.popoverCtrl.create('MorePopoverPage', {projId: this._projId });
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
