import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
    selector: 'compartir',
    styleUrls: ['./compartir.scss']
})
export class Compartir {

    @Output() respuestaCompartir = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    go(where) {
        this.router.navigate([where]);
    }

    compartir() {
        FB.ui({
            method: 'share',
            href: 'https://developers.facebook.com/docs/',
        }, function(response){});
        this.respuestaCompartir.emit(true);
    }

    noCompartir() {
        this.respuestaCompartir.emit(false);
    }
}