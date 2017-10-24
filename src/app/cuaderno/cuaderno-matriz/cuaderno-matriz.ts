import { Component, AfterViewInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Cuaderno } from '../cuaderno';
import { Asesor } from '../../asesor/asesor';

@Component({
    selector: 'cuaderno-matriz',
    animations: [trigger( 'fadeText',[
        transition(
            ':enter', [
                style({opacity: '0'}),
                animate('400ms 400ms ease-in-out', style({opacity: '1'}))
            ]
        ),
        transition(
            ':leave', [
                style({opacity: '1'}),
                animate('400ms ease-in-out', style({opacity: '0'}))
            ]
        )]
    )]
})
export class CuadernoMatriz extends Cuaderno implements AfterViewInit {
    @Input() asesor: Asesor;
    showTexto: number = null;

    switchTexto(id: number) {
        this.showTexto = id;
    }

    ngAfterViewInit() {
        this.asesor.showMensaje('Haz click en cada dimensión para conocer sus criterios', {hideOnClick: true, showOnce: true});
    }

}