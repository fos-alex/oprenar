import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./notificaciones.scss'],
    encapsulation: ViewEncapsulation.None

})
export class Notificaciones {

    constructor(private router: Router) { }

}
