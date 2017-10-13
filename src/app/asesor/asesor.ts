import { Component, AfterViewInit, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

import { AppStorage } from '../storage/app-storage';
import { Overlay } from '../overlay/overlay';
import { AudioService } from './audio/audio';

@Component({
    selector: 'asesor',
    styleUrls: ['./asesor.scss'],
    providers: [ AudioService ]
})
export class Asesor implements AfterViewInit {
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
    destacado: string;
    nombre: string;
    asesorVisible: boolean = true;
    columnaVisibleXS: boolean = false;
    protected nombres: object = {
        EL: 'Dany',
        ELLA: 'Susi'
    };
    btn: any = {
        'RED': 'btn-red',
        'GREEN': 'btn-green'
    };
    mensajes: any = {
        'MENSAJE-1': "¡El tiempo vuela! Lideras una O.N.G y debes seleccionar propuestas para integrar el plan de incidencia anual. <b>Haz click en el cuaderno para continuar</b>"
    };

    constructor(private renderer: Renderer2,
                private audio: AudioService) {
    }

    ngAfterViewInit() {
        let state = AppStorage.getState();

        this.nombre = state.asesor;
        this.audio.initAsesor(this.nombre);

        if (!state.asesor) {
            this.asesorVisible = false;
            if (this.overlay)
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
            let mensajesVistos = AppStorage.getStateItem('mensajes') || {};
            let id = Md5.hashStr(this.mensaje.texto).toString();
            if (mensajesVistos[id]) {
                this.mostrarMensaje = false;
                return false;
            }

            mensajesVistos[id] = true;
            AppStorage.addToState('mensajes', mensajesVistos);
        }

        this.audio.playSonido('popup1', {extension: 'mp3'});
        if (options.audio) {
            this.audio.playAsesor(options.audio);
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

        return true;
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
        this.asesorNameChange.emit(this.nombre);
        this.overlay.hide();
        this.audio.initAsesor(this.nombre);
        this.showMensaje(this.mensajes['MENSAJE-1'], {audio: 'el-tiempo-vuela'});
    }

    destacarItem(item) {
        this.destacado = item;
    }

    quitarDestacado() {
        this.destacado = null;
    }

    overlayClick() {

    }

    hamburguerClick() {
        this.columnaVisibleXS = !this.columnaVisibleXS;
    }

    ocultarColumna() {
        this.asesorVisible = false;
    }

}
