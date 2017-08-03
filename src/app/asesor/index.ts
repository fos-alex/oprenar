import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Asesor } from './asesor';
import NotificacionesModule from '../notificaciones';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Asesor
    ],
    imports: [
        CommonModule,
        RouterModule,
        NotificacionesModule
    ],
    exports: [
        Asesor
    ]
})
export default class AsesorModule {
}

