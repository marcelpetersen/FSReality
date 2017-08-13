import { NgModule } from '@angular/core';
import { ContactDrawerComponent } from './contact-drawer/contact-drawer';
import { IonicModule } from 'ionic-angular';
import { PopoverHeaderComponent } from './popover-header/popover-header';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header';
@NgModule({
	declarations: [ContactDrawerComponent,
    PopoverHeaderComponent,
    ShrinkingSegmentHeaderComponent],
	imports: [IonicModule],
	exports: [ContactDrawerComponent,
    PopoverHeaderComponent,
    ShrinkingSegmentHeaderComponent]
})
export class ComponentsModule { }
