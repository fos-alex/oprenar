import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'compartir',
    styleUrls: ['./compartir.scss']
})
export class Compartir {

    @Output() eulaAceptado = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    go(where) {
        this.router.navigate([where]);
    }

    compartir() {
        this.eulaAceptado.emit(true);
    }
}