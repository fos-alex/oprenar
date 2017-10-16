import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'elegir-asesor',
    styleUrls: ['./elegir-asesor.scss']
})
export class ElegirAsesor {
    @Output() asesorNameChange = new EventEmitter<string>();
    nombre;

    elegirAsesor (nombre) {
        this.nombre = nombre;
    }

    aceptar() {
        if (!this.nombre) return;

        this.asesorNameChange.emit(this.nombre);
    }

}
