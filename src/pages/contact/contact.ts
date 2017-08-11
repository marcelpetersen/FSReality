import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api.provider';
import { SharedProvider } from '../../providers/shared/shared.provider';

declare var google;
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [SharedProvider]
})
export class ContactPage {
  @ViewChild('map') mapElement: ElementRef;
  projId: number;
  map: any;
  projectLocation: any = {};
  apiKey: string = 'AIzaSyAVl2x2lJ3PPcOIICl73ZuzYmgEmwl3ELE';

  constructor(public api: ApiProvider, public navParams: NavParams, public shared: SharedProvider) {
    this.projId = navParams.get('projId');
    this.loadGoogleMaps();
  }
  loadGoogleMaps() {
    if (typeof google == "undefined" || typeof google.maps == "undefined") {
      window['mapInit'] = () => {
        this.initMap();
      }
      let script = document.createElement("script");
      script.id = "googleMaps";
      script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      document.body.appendChild(script);
    }
    else {
      this.initMap();
    }
  }
  initMap() {
    this.shared.Loader.show();
    this.api.getContact().subscribe(data => {
      this.shared.Loader.hide();
      let mapOptions = {
        center: new google.maps.LatLng(26.9124, 75.7873),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker([data.pageContactDetails.contact_details.latitude, data.pageContactDetails.contact_details.longitude], data.pageContactDetails.map_pin_url, data.pageContactDetails.contact_details.description);
      try {
        data.projectsLocation.forEach(element => {
          this.addMarker([element.project_location.latitude, element.project_location.longitude], element.map_pin_url, element.project_location.description);
        });
      } catch (e) {
        console.error(e)
      }
    }, err => {
      console.error(err);
      this.shared.Loader.hide();
    })
  }

  addMarker(position, icon, content) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: icon,
      position: new google.maps.LatLng(position[0], position[1])
    });
    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}