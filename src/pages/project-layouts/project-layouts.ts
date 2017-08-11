import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage({
  name: 'ProjectLayoutsPage',
  segment: 'project/layout/:projId'
})
@Component({
  selector: 'page-project-layouts',
  templateUrl: 'project-layouts.html',
  providers: [SharedProvider]
})
export class ProjectLayoutsPage {
  public layouts: any = [];
  public floorPlans: any = [];
  public unitPlans: any = [];
  private _projId: any;
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider, private modalCtrl: ModalController) {
    this._projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getLayouts();

  }
  getLayouts() {
    this.shared.Loader.show();
    this.apiProvider.getLayouts(this._projId).subscribe(data => {
      this.shared.Loader.hide();
      this.layouts = data;
      this.createPhotos();
    }, err => {
      console.log(err.status);
    })
  }
  createPhotos() {
    for (let i = 0; i < this.layouts.length; i++) {
      if (this.layouts[i].layouts_slug == 'floor-plans') {
        this.floorPlans.push({
          url: this.layouts[i].url,
        });
      }
      if (this.layouts[i].layouts_slug == 'unit-plans') {
        this.unitPlans.push({
          url: this.layouts[i].url,
        });
      }
    }
  }

  openFloorPlanModal(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.floorPlans,
      initialSlide: 2, // The second image
    });
    modal.present();
  }
  openUnitPlanModal(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.unitPlans,
      initialSlide: 2, // The second image
    });
    modal.present();
  }
}
