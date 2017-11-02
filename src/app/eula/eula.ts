import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./eula.scss']
})
export class Eula implements OnInit {

    @Output() eulaAceptado = new EventEmitter<boolean>();

    isSafari: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    go(where) {
        this.router.navigate([where]);
    }

    aceptar() {
        AppStorage.addToState('eula', true);
        this.eulaAceptado.emit(true);
    }

    volver() {
        this.go('bienvenido');
    }
}