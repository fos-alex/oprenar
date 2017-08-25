import { Component, Input } from '@angular/core';
import { AppStorage } from '../storage/app-storage';

@Component({
    selector: 'bienvenido',
    styleUrls: ['./bienvenido.scss']
})
export class Bienvenido {

    @Input() callback: Function;

    aceptar(event) {
        AppStorage.addToState('viewObjetivo', true);
        this.callback();
        event.stopPropagation();
        return false;
    }
}