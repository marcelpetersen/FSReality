import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SharedProvider]
})
export class HomePage {
  public categories: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider, public apiProvider: ApiProvider) {
    this.getProjectCategories();
  }

  getProjectCategories() {
    this.shared.Loader.show();
    this.apiProvider.getProjectCategories().subscribe(data => {
      this.categories = data;
      this.shared.Loader.hide();
    }, err => {
      console.error(err);
      this.shared.Loader.hide();
    })
  }
  showProjects(catId, catName) {
    this.navCtrl.push('ProjectsListPage', { catId: catId, catName: catName });
  }

}
