import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Bienvenido } from './bienvenido';
import AsesorModule from '../asesor';

export const ROUTER_CONFIG = [
    { path: 'bienvenido', component: Bienvenido, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Bienvenido
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule,
        AsesorModule
    ]
})
export default class BienvenidoModule {
    static routes = ROUTER_CONFIG;
}

