import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./carpetas.scss']
})
export class Carpetas {
    state: any;

    constructor(private router: Router) {
        this.state = AppStorage.getState();
        AppStorage.addToState('viewCarpetas', true);

    }

    carpetasClick(id) {
        this.router.navigate(['propuestas', id]);
    }

    getPropuestaSeleccionada(idCarpeta) {
        return this.state.propuestas[idCarpeta] ? 'seleccion-' + this.state.propuestas[idCarpeta] : '';
    }
}
