import { Component, AfterContentInit, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

import { AppStorage } from '../storage/app-storage';
import { Overlay } from '../overlay/overlay';

@Component({
    selector: 'asesor',
    styleUrls: ['./asesor.scss']
})
export class Asesor implements AfterContentInit {
    @Input() exclude: string;
    @Input() showColumna: boolean;
    @Output() asesorNameChange = new EventEmitter<string>();

    @ViewChild(Overlay)
    private overlay: Overlay;

    itemsStyle: any;
    showNotificaciones: boolean = false;
    mensaje: any = {};
    mostrarMensaje: boolean = false;
    listenerClick: any;
    protected nombre: string;
    protected nombres: object = {
        EL: 'Dany',
        ELLA: 'Susi'
    };
    btn: any = {
        'RED': 'btn-red',
        'GREEN': 'btn-green'
    };
    mensajes: any = {
        'MENSAJE-1': "El tiempo vuela! Antes de empezar a tomar decisiones, le recomiendo repasar todo aquello con lo que cuenta nuestra organización."
    };

    constructor(private renderer: Renderer2) {
    }

    ngAfterContentInit() {
        let state = AppStorage.getState();

        this.nombre = state.asesor;

        if (!state.asesor) {
            this.overlay.show();
            return;
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

    toggleMensajeActual() {
        if (this.mostrarMensaje) {
            this.hideMensaje();
        } else {
            this.showMensajeActual();
        }
        return false;
    }

    showMensaje(mensaje: string, options?: any) {
        this.mostrarMensaje = true;
        if (mensaje) {
            this.mensaje.texto = mensaje;
        }

        if (!options) return;

        if (options.showOnce) {
            let mensajesVistos = AppStorage.getStateItem('mensajes');
            let id = Md5.hashStr(this.mensaje.texto).toString();
            if (mensajesVistos[id]) {
                return this.mostrarMensaje = false;
            }

            mensajesVistos[id] = true;
            AppStorage.addToState('mensajes', mensajesVistos);
        }

        if (options.btn) {
            // Render botones
            this.mensaje.btn = options.btn;
        }

        if (options.overlay) {
            this.overlay.show();

        }

        if (options.hideOnClick) {
            setTimeout(() => {
                this.listenerClick = this.renderer.listen('document', 'click', (evt) => {
                    this.hideMensaje();
                });
            }, 0);
        }
    }

    hideMensaje(): void {
        if (!this.mostrarMensaje) return;

        this.mostrarMensaje = false;

        if (this.listenerClick) // hideOnClick
            this.listenerClick();

        this.overlay.hide();
    }

    getAsesorNombre(nombre) {
        this.nombre = nombre;
        AppStorage.addToState('asesor', this.nombre);
        this.showMensaje(this.mensajes['MENSAJE-1']);
        this.asesorNameChange.emit(this.nombre);
        this.overlay.hide();
    }

    overlayClick() {

    }

}
