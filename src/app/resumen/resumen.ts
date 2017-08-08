import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./resumen.scss']
})

export class Resumen {

    constructor(private router: Router) {}

    go(where) {
        this.router.navigate([where]);
    }
}