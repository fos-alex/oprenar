import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Cuaderno } from './cuaderno';

export const ROUTER_CONFIG = [
    { path: '', component: Cuaderno, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Cuaderno
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class CuadernoModule {
    static routes = ROUTER_CONFIG;
}

