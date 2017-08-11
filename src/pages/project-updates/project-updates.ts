import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
import { GalleryModal } from 'ionic-gallery-modal';
@IonicPage({
  name: 'ProjectUpdatesPage',
  segment: 'project/updates/:projId'
})
@Component({
  selector: 'page-project-updates',
  templateUrl: 'project-updates.html',
  providers: [SharedProvider]
})
export class ProjectUpdatesPage {
  public projId: any;
  public updates: any = [];
  public images: any = [];
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider,  public apiProvider: ApiProvider, private modalCtrl: ModalController) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    this.getProjectUpdates();
  }
  createPhotos()
  {
    for(let i = 0; i < this.updates.length; i++)
    {
      this.images.push({
        url: this.updates[i].url,
      });
    }
  }
  getProjectUpdates()
  {
    this.apiProvider.getUpates(this.projId).subscribe(data=> {
      this.updates = data;
      this.createPhotos();
    }, err=> {
      console.log(err.status);
    })
  }
  openPopup(index)
  {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: 2, // The second image
    });
    modal.present();
  }
}
