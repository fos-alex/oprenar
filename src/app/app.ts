import { Component, ViewEncapsulation } from '@angular/core';
import { AppStore } from './app-store';

@Component({
  styleUrls: ['./global.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
  constructor(public appStore: AppStore) {
    console.log('Hello Angular 2 Webpack 2');
  }
}

