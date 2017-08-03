import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Carpetas } from './carpetas';
import AsesorModule from '../asesor';

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
        CommonModule,
        AsesorModule
    ]
})
export default class CarpetasModule {
    static routes = ROUTER_CONFIG;
}

