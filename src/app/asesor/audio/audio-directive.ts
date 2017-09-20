import { Directive, HostListener, ElementRef } from '@angular/core';

import { AudioService } from './audio';

@Directive({
    selector: '[audioDirective]'
})
export class AudioDirective {

    constructor(private audio: AudioService,
                private el: ElementRef) {
    }

    @HostListener('click', ['$event.target'])
    onClick() {
        this.audio.playSonido('click');
    }
}