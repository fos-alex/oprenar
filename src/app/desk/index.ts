import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Desk } from './desk';
import AsesorModule from '../asesor';
import BienvenidoModule from '../bienvenido';
import OverlayModule from '../overlay';
import EulaModule from '../eula';

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
        OverlayModule,
        EulaModule,
        BienvenidoModule
    ]
})
export default class DeskModule {
    static routes = ROUTER_CONFIG;
}

