import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Resumen } from './resumen';
import { Compartir } from './compartir/compartir';

export const ROUTER_CONFIG = [
    { path: 'resumen', component: Resumen, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Resumen,
        Compartir
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ],
    exports: [
        Compartir
    ]
})
export default class ResumenModule {
    static routes = ROUTER_CONFIG;
}

