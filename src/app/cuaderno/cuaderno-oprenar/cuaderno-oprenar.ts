import { Component, AfterViewInit, Input } from '@angular/core';
import { Cuaderno } from '../cuaderno';
import { Asesor } from '../../asesor/asesor';

@Component({
    selector: 'cuaderno-oprenar'
})
export class CuadernoOprenar extends Cuaderno implements AfterViewInit {
    @Input() asesor: Asesor;

    ngAfterViewInit() {
        this.asesor.showMensaje('Los lineamientos de OPRENAR siempre nos ayudan a establecer prioridades. <b>Haz click en la lámpara para continuar.</b>', {hideOnClick: true, showOnce: true, audio: 'lineamientos'});
        this.asesor.destacarItem('escritorio');
    }

    ngOnDestroy() {
        this.asesor.quitarDestacado();
    }

}