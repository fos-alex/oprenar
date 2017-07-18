import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './home';


export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Home
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG)
  ],
})
export default class HomeModule {
}

