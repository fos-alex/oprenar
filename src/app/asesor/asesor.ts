import { Component, AfterContentInit, Input, Renderer2 } from '@angular/core';
import { AppStorage } from '../storage/app-storage';

@Component({
    selector: 'asesor',
    styleUrls: ['./asesor.scss']
})
export class Asesor implements AfterContentInit {
    @Input() exclude: string;
    @Input() showColumna: boolean;

    itemsStyle: any;
    showNotificaciones: boolean = false;
    mensaje: any = {};
    mostrarMensaje: boolean = false;
    listenerClick;
    protected nombre: string;
    protected nombres: object = {
        EL: 'dany',
        ELLA: 'susi'
    };
    btn: any = {
        'RED': 'btn-red',
        'GREEN': 'btn-green'
    };

    constructor(private renderer: Renderer2) {
    }

    ngAfterContentInit() {
        let state = AppStorage.getState();

        this.nombre = state.asesor;

        if (!state['mensaje-1']) {
            this.showMensaje("El tiempo vuela! Antes de empezar a tomar decisiones, le recomiendo repasar todo aquello con lo que cuenta nuestra organización.");
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

    showMensajeActual() {
        this.mostrarMensaje = true;
        return false;
    }

    showMensaje(mensaje: string, options?: any) {
        this.mostrarMensaje = true;
        if (mensaje) {
            this.mensaje.texto = mensaje;
        }

        if (options.btn) {
            // Render botones
            this.mensaje.btn = options.btn;
        }

        if (options.hideOnClick) {
            this.listenerClick = this.renderer.listen('document', 'click', (evt) => {
                this.hideMensaje();
            });
        }
        return false;
    }

    hideMensaje(): void {
        if (!this.mostrarMensaje) return;

        this.mostrarMensaje = false;
        AppStorage.addToState('mensaje-1', true);
        this.listenerClick();
    }

    getAsesorNombre(nombre) {
        this.nombre = nombre;
        AppStorage.addToState('asesor', this.nombre);
    }

}
