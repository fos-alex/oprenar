import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { AudioService } from '../asesor/audio/audio';

@Component({
    styleUrls: ['./bienvenido.scss'],
    providers: [ AudioService ]
})
export class Bienvenido {

    @Input() callback: Function;
    sonido: boolean = true;

    constructor(private router: Router,
                private audio: AudioService) {
    }

    go(where) {
        AppStorage.addToState('viewObjetivo', true);
        this.router.navigate([where]);
    }

    toggleSonido() {
        this.sonido = !this.sonido;
        this.audio.mute(!this.sonido);
    }
}