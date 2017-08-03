import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Final } from './final';

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
        CommonModule
    ]
})
export default class CuadernoModule {
    static routes = ROUTER_CONFIG;
}

