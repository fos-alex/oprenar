import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Carpetas } from './carpetas';

export const ROUTER_CONFIG = [
    { path: 'carpetas', component: Carpetas, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Carpetas
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class CarpetasModule {
    static routes = ROUTER_CONFIG;
}

