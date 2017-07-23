import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./carpetas.scss']
})
export class Carpetas {

    constructor(private router: Router) { }

    carpetasClick() {
        this.router.navigate(['propuestas']);
    }
}
