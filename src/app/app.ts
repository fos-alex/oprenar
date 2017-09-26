import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppStore } from './app-store';
import { AudioService } from './asesor/audio/audio';

@Component({
  styleUrls: ['./sass/normalize.scss', './sass/global.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(window:orientationchange)': 'onOrientationChange()'
    /*'(window:resize)': 'onOrientationChange($event)'*/
  }
})
export class App implements OnInit {
  bodyStyle: any;
  portrait: boolean;

  constructor(public appStore: AppStore,
              private audio: AudioService) {

  }

  ngOnInit() {
    this.checkOrientation();
  }

  checkOrientation() {
      if(window.matchMedia('(orientation: portrait)').matches) {
          this.portrait = true;
      } else if(window.matchMedia('(orientation: landscape)').matches) {
          this.portrait = false;
      }
  }

  onOrientationChange() {
      this.checkOrientation();
  }

}

