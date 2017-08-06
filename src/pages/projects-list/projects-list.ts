import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-projects-list',
  templateUrl: 'projects-list.html',
})
export class ProjectsListPage {
  public type:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('category');
  }

  ionViewDidLoad() {
    
  }

}
