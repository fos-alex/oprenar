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

        let restanSeleccionar = 0;
        for (let key in this.state.propuestas) {
            let propuesta = this.state.propuestas[key];
            if (!propuesta) {
                restanSeleccionar++;
            }
        }

        if (restanSeleccionar === 0) {
            this.propuestasSeleccionadas();
        }

    }

    propuestasSeleccionadas() {
        this.router.navigate(['resumen']);
    }

    carpetasClick(id) {
        this.router.navigate(['propuestas', id]);
    }

    getPropuestaSeleccionada(idCarpeta) {
        return this.state.propuestas[idCarpeta] ? 'seleccion-' + this.state.propuestas[idCarpeta] : '';
    }
}
