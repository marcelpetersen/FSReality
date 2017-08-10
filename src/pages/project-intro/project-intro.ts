import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared.provider';
import { ApiProvider } from '../../providers/api/api.provider';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-project-intro',
  templateUrl: 'project-intro.html',
  providers: [SharedProvider]
})
export class ProjectIntroPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  public projId: any;
  public projIntro: any = [];
  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public shared: SharedProvider,  public apiProvider: ApiProvider, private _sanitizer: DomSanitizer) { 
    this.projId = navParams.get('projId');
  }
  getBackground (image) {
     return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }
  ionViewDidLoad() {
    this.getProjectDetails();
  }
  getProjectDetails()
  {
    this.apiProvider.getProjectIntro(this.projId).subscribe(data => {
      this.projIntro = data;
    }, err => {
      console.log(err.status);
    })
  }
  presentPopover() {
    let pop = this.popoverCtrl.create('MorePopoverPage', {projId: this.projId });
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
