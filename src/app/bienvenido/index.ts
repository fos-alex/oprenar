import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Bienvenido } from './bienvenido';

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
        CommonModule
    ]
})
export default class BienvenidoModule {
    static routes = ROUTER_CONFIG;
}

