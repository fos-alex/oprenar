import { Component, AfterContentInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

import { Asesor } from '../asesor/asesor';


@Component({
    styleUrls: ['./resumen.scss']
})

export class Resumen implements AfterContentInit {


    private state: any;
    private compartir: boolean;
    resultado: string;
    private resultados = {
        REALISTA: 'realista',
        AUDAZ: 'audaz',
        EMPRENDEDOR: 'emprendedor',
        DINAMICO: 'dinámico',
        TRANSFORMADOR: 'transformador',
        TRANSGRESOR: 'transgresor',
    };

    @ViewChild(Asesor)
    private asesor: Asesor;

    constructor(private router: Router) {}

    ngAfterContentInit() {
        this.state = AppStorage.getState();
        this.resultado = this.calcularResultado(this.state.propuestas);
        this.asesor.showMensaje('Puedes acceder aquí al reporte final de cada una de tus propuestas seleccionadas', {hideOnClick: true, showOnce: true});
        this.asesor.ocultarColumna();
    }

    go(where: string) {
        this.router.navigate([where]);
    }

    showCompartir() {
        this.compartir = true;
    }

    calcularResultado(propuestas: object): string {
        let pesos = {
            fpj: {
                '1': 'D',
                '2': 'C',
                '3': 'O'
            },
            pa: {
                '1': 'C',
                '2': 'D',
                '3': 'O'
            },
            pe: {
                '1': 'C',
                '2': 'O',
                '3': 'D'
            },
            pld: {
                '1': 'D',
                '2': 'C',
                '3': 'O'
            },
            ps: {
                '1': 'D',
                '2': 'O',
                '3': 'C'
            }
        };
        let pesosPropuestas = Object.assign({}, propuestas);
        for (let key in pesosPropuestas) {
            pesosPropuestas[key] = pesos[key][pesosPropuestas[key]];
        }

        let pesosContados = this.contarPesos(pesosPropuestas);
        if (pesosContados['C'] > pesosContados['D'] && pesosContados['C'] > pesosContados['O']) {
            // Mayoría de C
            return this.resultados.REALISTA;
        }
        if (pesosContados['D'] > pesosContados['C'] && pesosContados['D'] > pesosContados['O']) {
            // Mayoría de D
            return this.resultados.AUDAZ;
        }
        if (pesosContados['O'] > pesosContados['C'] && pesosContados['O'] > pesosContados['D']) {
            // Mayoría de O
            return this.resultados.EMPRENDEDOR;
        }
        if (pesosContados['O'] < pesosContados['C'] && pesosContados['O'] < pesosContados['D']) {
            // Minoria de O
            return this.resultados.DINAMICO;
        }
        if (pesosContados['C'] < pesosContados['D'] && pesosContados['C'] < pesosContados['O']) {
            // Minoria de C
            return this.resultados.TRANSGRESOR;
        }
        if (pesosContados['D'] < pesosContados['C'] && pesosContados['D'] < pesosContados['O']) {
            // Minoria de D
            return this.resultados.TRANSFORMADOR;
        }

        console.error('No tiene ningún resultado. Esto no debería suceder porque los resultados no son divisibles por 3.');
    }

    contarPesos(propuestas: any): object {
        let elementsCounter = {
            'C': 0, 'D': 0, 'O': 0
        };
        for (let key in propuestas) {
            if (!propuestas[key]) continue;

            if (!elementsCounter[propuestas[key]]) {
                elementsCounter[propuestas[key]] = 0;
            }

            elementsCounter[propuestas[key]]++;
        }
        return elementsCounter;
    }
}