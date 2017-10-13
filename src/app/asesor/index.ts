import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Asesor } from './asesor';
import { ElegirAsesor } from './elegir-asesor/elegir-asesor';
import { AudioService } from './audio/audio';
import { AudioDirective } from './audio/audio-directive';
import { Reloj } from './reloj/reloj';

import OverlayModule from '../overlay';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Asesor,
        ElegirAsesor,
        AudioService,
        Reloj,
        AudioDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule,
    ],
    exports: [
        Asesor,
        ElegirAsesor,
        AudioService,
        AudioDirective
    ]
})
export default class AsesorModule {
}

