import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'overlay',
    styleUrls: ['./overlay.scss']
})
export class Overlay {

    @Output() overlayClick = new EventEmitter<any>();

    display: string = 'none';

    show() {
        this.display = 'block';
    }

    hide() {
        this.display = 'none';
    }

    onClick($event) {
        this.overlayClick.emit($event);
    }

}
