import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';

import { App } from './app/app';
import { AppStore } from './app/app-store';
import AsesorModule from './app/asesor/';
import appModule from './app';

import { AudioService } from './app/asesor/audio/audio';

@NgModule({
  bootstrap: [
    App
  ],
  declarations: [
    App
  ],
  imports: [
    // Angular 2
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AsesorModule,
    RouterModule.forRoot([]),
    // app
    appModule
    // vendors
  ],
  providers: [
    AppStore,
    AudioService
  ]
})
class MainModule {
  constructor(public appRef: ApplicationRef, public appStore: AppStore) {}
  hmrOnInit(store) {
    if (!store || !store.state) { return; }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // restore state
    this.appStore.setState(store.state);
    // restore input values
    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    const currentState = this.appStore.getState();
    store.state = currentState;
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(MainModule);
}

// boot on document ready
bootloader(main);
