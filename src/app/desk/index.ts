import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Desk } from './desk';
import AsesorModule from '../asesor';
import BienvenidoModule from '../bienvenido';

export const ROUTER_CONFIG = [
    { path: '', component: Desk, pathMatch: 'full' },
    { path: 'desk', component: Desk, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Desk
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule,
        AsesorModule,
        BienvenidoModule
    ]
})
export default class DeskModule {
    static routes = ROUTER_CONFIG;
}

