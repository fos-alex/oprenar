import { Component, AfterViewInit, Input } from '@angular/core';
import { Cuaderno } from '../cuaderno';

import { Asesor } from '../../asesor/asesor';

@Component({
  selector: 'cuaderno-ong'
})
export class CuadernoOng extends Cuaderno implements AfterViewInit {
    @Input() asesor: Asesor;

    ngAfterViewInit() {
        this.asesor.showMensaje('Recomiendo repasar todo aquello con lo que cuenta nuestra O.N.G. <strong>Haz click en cada solapa del cuaderno.</strong>', {overlay: true, hideOnClick: true, showOnce: true, audio: 'repasar-todo-aquello'});
    }
}