import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppStore } from './app-store';
import { AudioService } from './asesor/audio/audio';
import { AppStorage } from './storage/app-storage';


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
    let state = AppStorage.getState();
    let now = new Date();
    if (state.lastAccessed) {
        let timeDiff = Math.abs(now.getTime() - (new Date(state.lastAccessed)).getTime());
        let resetTime = 24 * 60 * 60 * 1000; // 1 Day
        if (timeDiff >= resetTime) {
            AppStorage.restart();
        }
    }

    AppStorage.addToState('lastAccessed', now);


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

