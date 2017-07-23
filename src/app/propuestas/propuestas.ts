import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import * as _ from "lodash";

@Component({
    styleUrls: ['./propuestas.scss'],
    host: {
        '(document:click)': 'onClick($event)',
    }
})
export class Propuestas implements OnInit {

    propuestas: any;
    propuestaActual: number;
    detalle: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _eref: ElementRef) {
        this.propuestas = {
            1: 'ob-propuesta-izq',
            2: 'ob-propuesta-cen',
            3: 'ob-propuesta-der',
        }

    }

    ngOnInit() {
        this.route.paramMap
            .subscribe((params: ParamMap) => this.switchPropuesta(params.get('id')));
    }

    onClick($event) {
        if (this.detalle && !this._eref.nativeElement.contains($event.target)) // or some similar check
            this.ocultarDetalle();
    }

    propuestaClick(idPropuesta, event) {
        if (this.propuestaActual == idPropuesta) {
            return this.mostrarDetalle();
        }
        this.router.navigate(['/propuestas', idPropuesta]);
        event.stopPropagation();
    }

    mostrarDetalle() {
        this.detalle = true;
    }

    ocultarDetalle() {
        this.detalle = false;
    }

    switchPropuesta(idPropuesta) {
        if (!idPropuesta) return;
        this.ocultarDetalle();
        let ix = _.findKey(this.propuestas, (o) => o == 'ob-propuesta-cen');
        let tmp = this.propuestas[idPropuesta];
        this.propuestaActual = idPropuesta;
        this.propuestas[idPropuesta] = 'ob-propuesta-cen';
        this.propuestas[ix] = tmp;
    }
}
