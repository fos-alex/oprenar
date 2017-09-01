import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./bienvenido.scss']
})
export class Bienvenido {

    @Input() callback: Function;

    constructor(private router: Router) {
    }

    go(where) {
        AppStorage.addToState('viewObjetivo', true);
        this.router.navigate([where]);
    }
}