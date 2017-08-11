import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'ProjectLocationPage',
  segment: 'project/location/:projId'
})
@Component({
  selector: 'page-project-location',
  templateUrl: 'project-location.html',
})
export class ProjectLocationPage {
  public projId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projId = navParams.get('projId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectLocationPage');
  }

}
