import { Injectable } from '@angular/core';
import { Platform, Menu, MenuType, MenuController, Animation } from 'ionic-angular';

@Injectable()
export class ExtendMenuProvider {
  constructor() { }
}

// Default 3D menu type
class Menu3DType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const scale = 0.65;
    const correction = (plt.width() - (scale * plt.width()) + 100) / 2;
    const contentOpenedX = ((plt.width() - correction - 42) * (menu.isRightSide ? -1 : 1)) + 'px';
    const contentAni = new Animation(plt, menu.getContentElement());

    contentAni.fromTo('translateX', '0px', contentOpenedX);
    contentAni.fromTo('scale', '1', scale);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d', Menu3DType);

// 3D open type
class Menu3DOpenType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateX', '-50%', '0');
    menuAni.fromTo('perspective', '100em', '0');
    menuAni.fromTo('rotateY', '90deg', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-open', Menu3DOpenType);

// 3D skew type
class Menu3DSkewType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateX', '-50%', '0');
    menuAni.fromTo('perspective', '100em', '0');
    menuAni.fromTo('rotateY', '-90deg', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    contentAni.fromTo('rotateY', '0', '45deg');
    this.ani.add(contentAni);

    menu.getContentElement().parentElement.style.perspective = (plt.width() * 2) + 'px';
    menu.getContentElement().style.transformOrigin = '0 50%';
  }
}
MenuController.registerType('3d-skew', Menu3DSkewType);

// 3D fall down type
class Menu3DFallDownType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateY', '-100%', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-fall-down', Menu3DFallDownType);

// 3D float up type
class Menu3DFloatUpType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateY', '100%', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-float-up', Menu3DFloatUpType);

//3D scale back type
class Menu3DScaleBackType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const scale = 0.8;
    const correction = (plt.width() - (scale * plt.width())) / 2;
    const contentOpenedX = ((plt.width() - correction - 60) * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());
    const backdropApi = new Animation(plt, menu.getBackdropElement());

    menuAni.fromTo('translateX', '-100%', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    contentAni.fromTo('scale', '1', scale);
    contentAni.fromTo('rotateY', '0', '-45deg');
    this.ani.add(contentAni);

    backdropApi.fromTo('opacity', 0.01, 0.35);
    this.ani.add(backdropApi);

    menu.getContentElement().parentElement.style.perspective = (plt.width() * 3) + 'px';
    menu.getContentElement().style.zIndex = '-2';

  }
}
MenuController.registerType('3d-scale-back', Menu3DScaleBackType);

// 3D scale up type
class Menu3DScaleUpType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateX', '-25%', '0');
    menuAni.fromTo('scale', '0.5', '1');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-scale-up', Menu3DScaleUpType);

// 3D rotate out type
class Menu3DRotateOutType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateX', '-100%', '0');
    menuAni.fromTo('perspective', '100em', '0');
    menuAni.fromTo('rotateY', '-90deg', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-rotate-out', Menu3DRotateOutType);

// 3D reverse slide type
class Menu3DReverseSlideType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
    const menuAni = new Animation(plt, menu.getMenuElement());
    const contentAni = new Animation(plt, menu.getContentElement());

    menuAni.fromTo('translateX', '100%', '0');
    this.ani.add(menuAni);

    contentAni.fromTo('translateX', '0', contentOpenedX);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-reverse-slide', Menu3DReverseSlideType);

// 3D content down type
class Menu3DContentDownType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    const scale = 0.8;
    const correction = (plt.height() - (scale * plt.height())) / 2;
    const headerHeight = menu.getContentElement().getElementsByTagName('ion-navbar')[0].clientHeight;
    const contentOpenedX = (plt.height() - correction - (headerHeight * scale)) + 'px';
    const contentAni = new Animation(plt, menu.getContentElement());

    contentAni.fromTo('translateY', '0', contentOpenedX);
    contentAni.fromTo('scale', '1', scale);
    this.ani.add(contentAni);
  }
}
MenuController.registerType('3d-content-down', Menu3DContentDownType);