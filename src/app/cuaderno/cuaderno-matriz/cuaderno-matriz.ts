import { Component, AfterViewInit, Input } from '@angular/core';
import { Cuaderno } from '../cuaderno';

import { Asesor } from '../../asesor/asesor';

@Component({
    selector: 'cuaderno-matriz'
})
export class CuadernoMatriz extends Cuaderno implements AfterViewInit {
    @Input() asesor: Asesor;
    showTexto: number = 1;

    switchTexto(id: number) {
        this.showTexto = id;
    }

    ngAfterViewInit() {
        this.asesor.showMensaje('Haz click en cada dimensión para conocer sus criterios', {overlay: true, hideOnClick: true, showOnce: true});
    }

}