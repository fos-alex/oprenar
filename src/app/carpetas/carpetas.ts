import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { Asesor } from '../asesor/asesor';
import { AudioService } from '../asesor/audio/audio';

@Component({
    styleUrls: ['./carpetas.scss']
})
export class Carpetas implements OnInit {
    state: any;

    @ViewChild(Asesor)
    private asesor: Asesor;

    constructor(private router: Router,
                private audio: AudioService) {
    }

    ngOnInit() {
        this.state = AppStorage.getState();
        AppStorage.addToState('viewCarpetas', true);
        if (!this.asesor.showMensaje('Debes seleccionar sólo una propuesta por cada área.', {overlay: true, hideOnClick: true, showOnce: true, audio: 'seleccionar-una-propuesta'})) {
            if (!this.asesor.showMensaje('Estamos logrando completar nuestro plan', {overlay: true, hideOnClick: true, showOnce: true})) {
                if (!this.asesor.showMensaje('Puedes continuar por el área que desees', {overlay: true, hideOnClick: true, showOnce: true, audio: 'continuar-por-el-area'})) {
                    if (!this.asesor.showMensaje('¡Excelente! Ya lograste el primer paso. <br> ¡Continuemos!', {overlay: true, hideOnClick: true, showOnce: true, audio: 'excelente-primer-paso'})) {
                        if (!this.asesor.showMensaje('Siempre debes tener en cuenta la experiencia y los recursos de nuestra O.N.G.', {overlay: true, hideOnClick: true, showOnce: true, audio: 'siempre-debes-tener-en-cuenta'})) {
                            if (!this.asesor.showMensaje('Permanece atento a la información de contexto que tu equipo te brindará', {overlay: true, hideOnClick: true, showOnce: true, audio: 'permanece-atento'})) {
                            }
                        }
                    }
                }
            }
        }

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
        this.audio.playSonido('exito');
        this.asesor.showMensaje(`Todavía hay tiempo para completar tus elecciones. 
        
        ¿Estás seguro que has seleccionado las propuestas que deseas integrar a tu plan?`,
            {btn: [
                {text: 'NO', style: this.asesor.btn.RED, cb: () => { this.asesor.hideMensaje() }},
                {text: 'SI', style: this.asesor.btn.GREEN, cb: () => { this.router.navigate(['resumen']) }}
            ], overlay: true, audio: 'felicitaciones'});
    }

    carpetasClick(id) {
        this.router.navigate(['propuestas', id]);
    }

    getPropuestaSeleccionada(idCarpeta) {
        return this.state.propuestas[idCarpeta] ? 'seleccion-' + this.state.propuestas[idCarpeta] : '';
    }
}
