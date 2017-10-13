import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

import 'rxjs/add/operator/switchMap';
import { AudioService } from '../asesor/audio/audio';
import { Asesor } from '../asesor/asesor';

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

    @ViewChild(Asesor)
    private asesor: Asesor;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private audio: AudioService) {
        this.propuestas = {
            1: 'ob-propuesta-izq',
            2: 'ob-propuesta-cen',
            3: 'ob-propuesta-der'
        };
    }

    ngOnInit() {
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.proyecto = params.get('proyecto');
                let state = AppStorage.getState();
                this.propuestaSeleccionada = state.propuestas[this.proyecto];

                // Llevar a la primer propuesta si no hay ninguna seleccionada
                this.detallePropuesta(params.get('id') || '1');
            });
        this.asesor.showMensaje('Permanece atento a la información de contexto que tu equipo te brindará', {overlay: true, hideOnClick: true, showOnce: true, audio: 'permanece-atento'});
    }

    propuestaClick(idPropuesta, event) {
        this.router.navigate(['/propuestas', this.proyecto, idPropuesta]);
        event.stopPropagation();
    }

    siguientePropuesta() {
        this.audio.playSonido('papel2', {noClick: true});
        this.router.navigate(['/propuestas', this.proyecto, this.propuesta + 1]);
    }

    anteriorPropuesta() {
        this.audio.playSonido('papel3', {noClick: true});
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
        this.audio.playSonido('escribe1', {noClick: true});
        this.asesor.showMensaje('¡Excelente! Ya lograste el primer paso. <br> ¡Continuemos! <b>Haga click en Carpetas para continuar</b>', {overlay: true, hideOnClick: true, showOnce: true, audio: 'excelente-primer-paso'});
    }

    getPropuestaUrl() {
        return `/assets/propuestas/propuesta-${this.proyecto}/${this.propuesta}.html`;
    }
}
