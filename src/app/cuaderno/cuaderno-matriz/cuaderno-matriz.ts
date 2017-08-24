import { Component } from '@angular/core';
import { Cuaderno } from '../cuaderno';

@Component({
    selector: 'cuaderno-matriz'
})
export class CuadernoMatriz extends Cuaderno {

    showTexto: number = 1;

    switchTexto(id: number) {
        this.showTexto = id;
    }



}