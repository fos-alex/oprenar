import { Component, Output, EventEmitter } from '@angular/core';
import { AppStorage } from '../../storage/app-storage';
import { Asesor } from '../asesor';

@Component({
    selector: 'elegir-asesor',
    styleUrls: ['./elegir-asesor.scss']
})
export class ElegirAsesor extends Asesor {

    @Output() asesorNameChange = new EventEmitter<string>();
    asesorNombre;

    elegirAsesor (nombre) {
        this.asesorNombre = nombre;
    }

    aceptar() {
        if (!this.asesorNombre) return;

        this.asesorNameChange.emit(this.asesorNombre);
    }

}
