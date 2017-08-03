import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
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

    constructor() {
        let state = AppStorage.getState();

        if (!state['viewCarpetas']) {
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

}
