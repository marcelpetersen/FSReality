import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage({
  name: 'ProjectGalleryPage',
  segment: 'project/gallery/:projId'
})
@Component({
  selector: 'page-project-gallery',
  templateUrl: 'project-gallery.html',
  providers: [SharedProvider]
})
export class ProjectGalleryPage {
  private _projId: any;
  public gallery: any = [];
  public images: any = [];
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider, private modalCtrl: ModalController) {
    this._projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getGalleryImages();
  }
  getGalleryImages() {
    this.shared.Loader.show();
    this.apiProvider.getGalleryImages(this._projId).subscribe(data => {
      this.shared.Loader.hide();
      this.gallery = data;
      this.createPhotos();
    }, err => {
      console.log(err.status);
      this.shared.Loader.hide();
    })
  }
  createPhotos() {
    for (let i = 0; i < this.gallery.length; i++) {
      this.images.push({
        url: this.gallery[i].url,
      });
    }
  }
  openPopup(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: index || 0, // The second image
    });
    modal.present();
  }
}
