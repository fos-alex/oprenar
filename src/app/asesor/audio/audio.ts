import { Component, Injectable, HostListener } from '@angular/core';

import { AppStorage } from '../../storage/app-storage';

@Component({
})

@Injectable()
export class AudioService {

    repo: string = '/assets/audio/';
    repoAsesor: string;
    repoMusica: string;
    repoSonido: string;
    asesorNombre: string;
    public static muted: boolean;
    public static musica: any;

    skipNextClick: boolean = false;

    constructor() {
        let state = AppStorage.getState();

        this.asesorNombre = state.asesor;
        AudioService.muted = state.muted;
        this.repoMusica = this.repo + 'musica/';
        this.repoSonido = this.repo + 'sonido/';
    }

    initAsesor(nombre: string) {
        this.asesorNombre = nombre;
    }

    playAsesor(sound: string) {
        if (!this.asesorNombre) {
            throw new Error('El asesor aún no fue elegido.');
        }
        // Asesor nombre puede cambiar
        this.repoAsesor = this.repo + this.asesorNombre + '/';
        this.play(this.repoAsesor + sound)
    }

    playMusica(sound: string) {
        AudioService.musica = this.play(this.repoMusica + sound);
    }

    stopMusica() {
        AudioService.musica.pause();
    }

    playSonido(sound: string, options: any = {}) {
        options.extension = options.extension || 'wav';

        if (this.skipNextClick) {
            this.skipNextClick = !this.skipNextClick;
            return;
        }

        if (options.noClick) {
            this.skipNextClick = true;
        }

        this.play(this.repoSonido + sound, options)
    }

    mute(muted: boolean) {
        AudioService.muted = muted;
        AppStorage.addToState('muted', AudioService.muted);
    }

    play(sound: string, options?: any) {
        if (AudioService.muted) return;

        let defaultOptions = {
            extension: 'mp3'
        };
        options = Object.assign(defaultOptions, options);

        let audio = new Audio();
        audio.src = sound + '.' + options.extension;
        audio.load();
        audio.play();

        return audio;
    }
}
