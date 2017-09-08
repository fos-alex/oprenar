import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { Asesor } from '../asesor/asesor';

@Component({
    styleUrls: ['./carpetas.scss']
})
export class Carpetas implements OnInit {
    state: any;

    @ViewChild(Asesor)
    private asesor: Asesor;

    constructor(private router: Router) {
    }

    ngOnInit() {
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
        this.asesor.showMensaje(`Todavía hay tiempo para completar tus elecciones. 
        
        Estás seguro que has seleccionado las propuestas que deseas integrar a tu plan?`,
            {btn: [
                {text: 'NO', style: this.asesor.btn.RED, cb: () => { this.asesor.hideMensaje() }},
                {text: 'SI', style: this.asesor.btn.GREEN, cb: () => { this.router.navigate(['resumen']) }}
            ]});
    }

    carpetasClick(id) {
        this.router.navigate(['propuestas', id]);
    }

    getPropuestaSeleccionada(idCarpeta) {
        return this.state.propuestas[idCarpeta] ? 'seleccion-' + this.state.propuestas[idCarpeta] : '';
    }
}
