import { Component, HostListener, Input } from '@angular/core';
import { AppStorage } from '../storage/app-storage';

@Component({
    selector: 'asesor',
    styleUrls: ['./asesor.scss']
})
export class Asesor {
    @Input() exclude: string;

    carpetasStyle: any;
    itemsStyle: any;
    showNotificaciones: boolean = false;
    mensajeSusi: string;
    mostrarMensajeSusi: boolean = false;

    constructor() {
        let state = AppStorage.getState();

        if (!state['mensaje-1']) {
            this.showMensajeSusi("El tiempo vuela! Antes de empezar a tomar decisiones, le recomiendo repasar todo aquello con lo que cuenta nuestra organización.");
        } else if (!state['viewCarpetas']) {
            this.showEscritorio();
        }

        this.hide(this.exclude);
    }

    showEscritorio() {
        this.itemsStyle = {display: 'none'};
    }

    hide(element) {
        this.exclude = element;
    }

    toggleNotificaciones() {
        this.showNotificaciones = !this.showNotificaciones;
    }

    showMensajeSusi(mensaje: string) {
        this.mostrarMensajeSusi = true;
        if (mensaje) {
            this.mensajeSusi = mensaje;
        }
    }

    @HostListener('document:click', ['$event'])
    hideMensajeSusi(event: Event): void {
        this.mostrarMensajeSusi = false;
        AppStorage.addToState('mensaje-1', true);
    }

}
