import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import { Overlay } from './overlay';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Overlay
    ],
    imports: [
        CommonModule
    ],
    exports: [
        Overlay
    ]
})
export default class OverlayModule {
}

