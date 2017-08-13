import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html'
})
export class ShrinkingSegmentHeaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
  @Input('minHeaderHeight') minHeaderHeight: number;

  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer) {

  }

  ngAfterViewInit() {

    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });

  }

  resizeHeader(ev) {

    ev.domWrite(() => {

      this.newHeaderHeight = this.headerHeight - ev.scrollTop;

      if (this.newHeaderHeight < this.minHeaderHeight) {
        this.newHeaderHeight = this.minHeaderHeight;
      }

      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');

    });

  }

}