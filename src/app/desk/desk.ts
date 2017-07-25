import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    styleUrls: ['./desk.scss']
})

export class Desk {

    constructor(private router: Router) { }

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
