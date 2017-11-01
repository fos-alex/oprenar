import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Resumen } from './resumen';
import AsesorModule from '../asesor';
import { Compartir } from './compartir/compartir';

export const ROUTER_CONFIG = [
    { path: 'resumen', component: Resumen, pathMatch: 'full' },
    { path: 'resumen/:resultado', component: Resumen }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Resumen,
        Compartir
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule,
        AsesorModule
    ],
    exports: [
        Compartir
    ]
})
export default class ResumenModule {
    static routes = ROUTER_CONFIG;
}

