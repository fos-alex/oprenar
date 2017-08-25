import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';


@Component({
    styleUrls: ['./desk.scss']
})

export class Desk {

    showSusi: boolean;
    showBienvenido: boolean;
    carpetaStyle: string;
    cuadernoStyle: string;
    displayOverlay: string = 'none';

    constructor(private router: Router) {
        let state = AppStorage.getState();

        if (!state || !state['viewObjetivo']) {
            this.showOverlay();
            this.showBienvenido = true;
        } else if (!state['mensaje-1']) {
            this.showOverlay();
            this.showSusi = true;
        } else if (!state['viewCuaderno']) {
            this.highlightCuaderno();
        } else if (!state['viewCarpetas']) {
            this.highlightCarpetas();
        }

    }

    highlightCarpetas() {
        this.showOverlay();
        this.carpetaStyle = 'highlight';
    }
    
    highlightCuaderno() {
        this.showOverlay();
        this.cuadernoStyle = 'highlight';
    }

    showOverlay() {
        this.displayOverlay = 'block';
    }

    hideOverlay() {
        this.displayOverlay = 'none';
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
        if (this.showSusi) {
            this.hideOverlay();
            this.showSusi = false;
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
        this.showBienvenido = false;
        this.showSusi = true;
        return false;
    }
}
