import { NgModule } from '@angular/core';
import { ContactDrawerComponent } from './contact-drawer/contact-drawer';
import { IonicModule } from 'ionic-angular';
import { PopoverHeaderComponent } from './popover-header/popover-header';
@NgModule({
	declarations: [ContactDrawerComponent,
    PopoverHeaderComponent],
	imports: [IonicModule],
	exports: [ContactDrawerComponent,
    PopoverHeaderComponent]
})
export class ComponentsModule { }
