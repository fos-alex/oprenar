import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./desk.scss']
})

export class Desk {

    carpetaStyle: string;
    cuadernoStyle: string;
    displayOverlay: string = 'none';

    constructor(private router: Router) {
        let state = AppStorage.getState();

        if (!state || !state['viewCuaderno']) {
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

    cuadernoClick() {
        this.router.navigate(['cuaderno']);
    }

    carpetasClick() {
        this.router.navigate(['carpetas']);
    }

    iphoneClick() {
        this.router.navigate(['notificaciones']);
    }
}
