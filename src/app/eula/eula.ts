import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./eula.scss']
})
export class Eula {

    @Output() eulaAceptado = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    go(where) {
        this.router.navigate([where]);
    }

    aceptar() {
        AppStorage.addToState('eula', true);
        this.eulaAceptado.emit(true);
    }
}