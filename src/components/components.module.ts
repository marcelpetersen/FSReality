import { NgModule } from '@angular/core';
import { ContactDrawerComponent } from './contact-drawer/contact-drawer';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ContactDrawerComponent],
	imports: [IonicModule],
	exports: [ContactDrawerComponent]
})
export class ComponentsModule { }
