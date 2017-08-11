import { Component, ViewChild, ElementRef } from '@angular/core';
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
  public categorizedAmenities: any = { clubHouse: [], externalAmenities: [], securityAndSafety: [] }
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this._projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getAmenities();
  }
  getAmenities() {
    this.shared.Loader.show();
    this.apiProvider.getAmenities(this._projId).subscribe(data => {
      this.amenities = data;
      this.amenities.forEach(element => {
        if (element.amenity_slug == 'club-house') {
          this.categorizedAmenities.clubHouse.push(element);
        } else if (element.amenity_slug == 'external-amenities') {
          this.categorizedAmenities.externalAmenities.push(element);
        } else if (element.amenity_slug == 'security-and-safety') {
          this.categorizedAmenities.securityAndSafety.push(element);
        }
      });
      this.shared.Loader.hide();
    }, err => {
      console.log(err.status);
      this.shared.Loader.hide();
    })
  }
  presentPopover() {
    let pop = this.popoverCtrl.create('MorePopoverPage', { projId: this._projId });
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
