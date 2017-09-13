import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Asesor } from './asesor';
import { ElegirAsesor } from './elegir-asesor/elegir-asesor';

import NotificacionesModule from '../notificaciones';
import OverlayModule from '../overlay';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Asesor,
        ElegirAsesor
    ],
    imports: [
        CommonModule,
        RouterModule,
        NotificacionesModule,
        OverlayModule,
    ],
    exports: [
        Asesor,
        ElegirAsesor
    ]
})
export default class AsesorModule {
}

