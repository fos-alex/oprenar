import { Component, ViewEncapsulation } from '@angular/core';
import { AppStore } from './app-store';
import { AudioService } from './asesor/audio/audio';

@Component({
  styleUrls: ['./sass/global.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(window:orientationchange)': 'onOrientationChange()'
    /*'(window:resize)': 'onOrientationChange($event)'*/
  }
})
export class App {
  bodyStyle: any;

  constructor(public appStore: AppStore,
              private audio: AudioService) {}

  onOrientationChange() {
/*      if (typeof screen.orientation.angle !== 'undefined') {
        if (screen.orientation.angle === 0) {
          this.rotate(this, -90);
        } else {
          this.rotate(this, -90);
        }
      }*/
  }

  rotate(el, degs) {
    let iedegs = degs/90;
    if (iedegs < 0) iedegs += 4;
    let transform = 'rotate('+degs+'deg)';
    let iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
    let styles = {
      transform: transform,
      '-webkit-transform': transform,
      '-moz-transform': transform,
      '-o-transform': transform,
      filter: iefilter,
      '-ms-filter': iefilter
    };
    this.bodyStyle = styles;
  }



}

