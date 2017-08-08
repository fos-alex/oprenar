import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Resumen } from './resumen';

export const ROUTER_CONFIG = [
    { path: 'resumen', component: Resumen, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Resumen
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class ResumenModule {
    static routes = ROUTER_CONFIG;
}

