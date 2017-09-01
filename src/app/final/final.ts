import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./final.scss']
})

export class Final {

    carpetaMostrada: string = 'pa';
    state: any;
    keyPropuestas: any;

    constructor(private router: Router) {
        this.state = AppStorage.getState();
        this.keyPropuestas = Object.keys(this.state.propuestas);
    }

    go(where) {
        this.router.navigate([where]);
    }

    restart() {
        let state = AppStorage.getState();
        for (let key in state.propuestas) {
            state.propuestas[key] = null;
        }
        AppStorage.setState(state);
        this.go('desk');
    }

    moverCarpeta(offset: number) {
        let ix = this.keyPropuestas.indexOf(this.carpetaMostrada);
        ix = ix + offset;
        if (ix >= this.keyPropuestas.length) {
            this.carpetaMostrada = this.keyPropuestas[0];
        } else if (ix <= 0) {
            this.carpetaMostrada = this.keyPropuestas[this.keyPropuestas.length - 1];
        } else {
            this.carpetaMostrada = this.keyPropuestas[ix];
        }
    }

    siguienteCarpeta() {
        this.moverCarpeta(1);
    }

    anteriorCarpeta() {
        this.moverCarpeta(-1);
    }

    mostrarCarpeta(id: string) {
        this.carpetaMostrada = id;
    }
}