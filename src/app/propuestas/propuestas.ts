import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

import 'rxjs/add/operator/switchMap';
import * as _ from "lodash";

@Component({
    styleUrls: ['./propuestas.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Propuestas implements OnInit {

    propuestas: any;
    proyecto: string;
    propuesta: number;
    detalle: boolean;
    propuestaSeleccionada: number;
    propuestaUrl: string;
    seleccionado: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.propuestas = {
            1: 'ob-propuesta-izq',
            2: 'ob-propuesta-cen',
            3: 'ob-propuesta-der',
        };
    }

    ngOnInit() {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.proyecto = params.get('proyecto');
                let state = AppStorage.getState();
                this.propuestaSeleccionada = state.propuestas[this.proyecto];

                this.detallePropuesta(params.get('id'));
            });
    }

    propuestaClick(idPropuesta, event) {
        this.router.navigate(['/propuestas', this.proyecto, idPropuesta]);
        event.stopPropagation();
    }

    siguientePropuesta() {
        this.router.navigate(['/propuestas', this.proyecto, this.propuesta + 1]);
    }

    anteriorPropuesta() {
        this.router.navigate(['/propuestas', this.proyecto, this.propuesta - 1]);
    }

    mostrarDetalle() {
        this.detalle = true;
    }

    ocultarDetalle() {
        this.detalle = false;
    }

    detallePropuesta(idPropuesta: string) {
        if (!idPropuesta) return;

        this.propuesta = +idPropuesta;
        this.propuestaUrl = this.getPropuestaUrl();
        this.seleccionado = (this.propuestaSeleccionada == +idPropuesta);
        this.mostrarDetalle();
    }

    seleccionarPropuesta(event) {
        let state = AppStorage.getState();
        state.propuestas[this.proyecto] = event.seleccionada ? event.id : null;
        AppStorage.setState(state);
        this.propuestaSeleccionada = +event.id;
    }

    getPropuestaUrl() {
        return `/assets/propuestas/propuesta-${this.proyecto}/${this.propuesta}.html`;
    }
}
