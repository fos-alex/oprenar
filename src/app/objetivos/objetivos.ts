import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    selector: 'objetivos',
    styleUrls: ['./objetivos.scss']
})
export class Objetivos {

    @Output() objetivosAceptados = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    go(where) {
        this.router.navigate([where]);
    }

    aceptar() {
        AppStorage.addToState('objetivos', true);
        this.objetivosAceptados.emit(true);
    }

    volver() {
        this.go('bienvenido');
    }
}