import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { Final } from './final';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

export const ROUTER_CONFIG = [
    { path: 'final', component: Final, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Final
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        CommonModule
    ]
})
export default class CuadernoModule {
    static routes = ROUTER_CONFIG;
}

