import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
declare var google;
@IonicPage({
  name: 'ContactPage',
  segment: 'contact'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;

  ionViewDidLoad() {
    this.loadMap();
  }
  constructor(public navCtrl: NavController) { }
  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
}
