import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Notificaciones } from './notificaciones';

export const ROUTER_CONFIG = [
    { path: 'notificaciones', component: Notificaciones, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Notificaciones
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class NotificacionesModule {
    static routes = ROUTER_CONFIG;
}

