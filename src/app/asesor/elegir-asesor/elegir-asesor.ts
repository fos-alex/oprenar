import { Component, Output, EventEmitter } from '@angular/core';
import { AppStorage } from '../../storage/app-storage';
import { Asesor } from '../asesor';

@Component({
    selector: 'elegir-asesor',
    styleUrls: ['./elegir-asesor.scss']
})
export class ElegirAsesor extends Asesor {

    @Output() asesorNameChange = new EventEmitter<string>();

    elegirAsesor (nombre) {
        this.nombre = nombre;
    }

    aceptar() {
        if (!this.nombre) return;

        this.asesorNameChange.emit(this.nombre);
    }

}
