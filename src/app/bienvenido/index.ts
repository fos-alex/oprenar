import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Bienvenido } from './bienvenido';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Bienvenido
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        Bienvenido
    ]
})
export default class BienvenidoModule {
}

