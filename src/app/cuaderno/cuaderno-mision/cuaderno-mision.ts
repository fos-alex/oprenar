import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'cuaderno-mision'
})
export class CuadernoMision {
    constructor(private renderer: Renderer2,
                private elRef:ElementRef,
                private router: Router) {

    }

    switchPage(page) {
        this.router.navigate(['/cuaderno', page]);
    }

}