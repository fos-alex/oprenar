import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { Overlay } from '../overlay/overlay';
import { Asesor } from '../asesor/asesor';

@Component({
    styleUrls: ['./desk.scss']
})

export class Desk implements OnInit {

    showAsesorColumna: boolean;
    carpetaStyle: string;
    cuadernoStyle: string;
    eula: boolean = true;

    @ViewChild(Asesor)
    private asesor: Asesor;

    @ViewChild(Overlay)
    private overlay: Overlay;

    constructor(private router: Router) {
    }

    ngOnInit() {
        let state = AppStorage.getState() || {};
        this.eula = state['eula'];

        if (!state || !state['viewObjetivo']) {
            // Bienvenida
            return this.go('/bienvenido');
        } else if (!state['eula']) {
            // Eula not accepted
            this.overlay.show();
            return;
        }

        if (!state['asesor']) {
            // Redirect to desk to choose asesor
            this.showAsesorColumna = true;
        } else if (!state['viewCuaderno']) {
            this.asesor.showMensaje('¡El tiempo vuela! Lideras una O.N.G. y debes seleccionar propuestas para integrar el plan de incidencia anual.', {overlay: true, hideOnClick: true, showOnce: true});
            this.highlightCuaderno();
        } else if (!state['viewCarpetas']) {
            this.asesor.showMensaje(`¡Ya llegó el equipo. 
            ¿Empezamos a evaluar las propuestas?`, {hideOnClick: true, showOnce: true, audio: 'llego-el-equipo'});
            this.highlightCarpetas();
        }

    }

    go(where) {
        AppStorage.addToState('viewObjetivo', true);
        this.router.navigate([where]);
    }

    highlightCarpetas() {
        this.overlay.show();
        this.carpetaStyle = 'highlight';
    }
    
    highlightCuaderno() {
        this.overlay.show();
        this.cuadernoStyle = 'highlight';
    }

    cuadernoClick() {
        this.asesor.hideMensaje();
        this.router.navigate(['cuaderno']);
    }

    carpetasClick() {
        this.router.navigate(['carpetas']);
    }

    overlayClick() {
        if (this.showAsesorColumna) {
            this.overlay.hide();
            this.showAsesorColumna = false;
            let state = AppStorage.getState();

            if (!state['viewCuaderno']) {
                this.highlightCuaderno();
            } else if (!state['viewCarpetas']) {
                this.highlightCarpetas();
            }
        }
    }

    getAsesorNombre() {
        this.highlightCuaderno();
    }

    eulaAceptado() {
        this.eula = true;
        this.overlay.hide();
        //Re-run init function
        this.ngOnInit();
    }

    closeBienvenido() {
        this.overlay.show();
        this.showAsesorColumna = true;
        return false;
    }
}
