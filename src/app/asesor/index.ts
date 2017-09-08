import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Asesor } from './asesor';
import { ElegirAsesor } from './elegir-asesor/elegir-asesor';
import NotificacionesModule from '../notificaciones';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Asesor,
        ElegirAsesor
    ],
    imports: [
        CommonModule,
        RouterModule,
        NotificacionesModule
    ],
    exports: [
        Asesor,
        ElegirAsesor
    ]
})
export default class AsesorModule {
}

