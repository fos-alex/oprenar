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

    @ViewChild(Asesor)
    private asesor: Asesor;

    @ViewChild(Overlay)
    private overlay: Overlay;

    constructor(private router: Router) {
    }

    ngOnInit() {
        let state = AppStorage.getState();

        if (!state || !state['viewObjetivo']) {
            // Bienvenida
            this.go('/bienvenido');
        } else if (!state['asesor']) {
            // Redirect to desk to choose asesor
            this.showAsesorColumna = true;
        } else if (!state['viewCuaderno']) {
            this.highlightCuaderno();
        } else if (!state['viewCarpetas']) {
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
        this.router.navigate(['cuaderno']);
    }

    carpetasClick() {
        this.router.navigate(['carpetas']);
    }

    iphoneClick() {
        this.router.navigate(['notificaciones']);
    }

    overlayClick() {
        if (this.showAsesorColumna) {
            this.overlay.hide();
            this.showAsesorColumna = false;
            AppStorage.addToState('mensaje-1', true);

            let state = AppStorage.getState();

            if (!state['viewCuaderno']) {
                this.highlightCuaderno();
            } else if (!state['viewCarpetas']) {
                this.highlightCarpetas();
            }
        }
    }

    closeBienvenido() {
        this.showAsesorColumna = true;
        return false;
    }
}
