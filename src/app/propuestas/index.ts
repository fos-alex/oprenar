import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SafePipe } from './safe.pipe';
import { Propuestas } from './propuestas';
import AsesorModule from '../asesor';

import { DetallePropuesta } from './detalle-propuesta/detalle-propuesta';
import { NotificacionesPopup } from './notificaciones-popup/notificaciones-popup';


export const ROUTER_CONFIG = [
    { path: 'propuestas/:proyecto/:id', component: Propuestas },
    { path: 'propuestas/:proyecto', component: Propuestas },
    { path: 'propuestas', component: Propuestas, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        DetallePropuesta,
        Propuestas,
        SafePipe,
        NotificacionesPopup
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule,
        AsesorModule
    ],
    exports: [
        NotificacionesPopup
    ]
})
export default class PropuestasModule {
    static routes = ROUTER_CONFIG;
}

