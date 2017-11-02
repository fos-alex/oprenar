import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { AudioService } from '../asesor/audio/audio';

@Component({
    styleUrls: ['./bienvenido.scss'],
    providers: [ AudioService ]
})
export class Bienvenido implements OnInit {

    @Input() callback: Function;
    sonido: boolean = true;
    isSafari: boolean = false;

    constructor(private router: Router,
                private audio: AudioService) {
    }

    go(where) {
        AppStorage.addToState('viewObjetivo', true);
        this.router.navigate([where]);
    }

    ngOnInit() {
        this.audio.playMusica('jazz1');
        this.sonido = !AudioService.muted;

        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    toggleSonido() {
        this.sonido = !this.sonido;
        this.audio.mute(!this.sonido);
        if(this.sonido) {
            this.audio.playMusica('jazz1');
        } else {
            this.audio.stopMusica();
        }
    }
}