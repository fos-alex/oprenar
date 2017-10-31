import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'overlay',
    styleUrls: ['./overlay.scss']
})
export class Overlay implements OnInit {

    @Output() overlayClick = new EventEmitter<any>();

    display: string = 'none';

    ngOnInit() {
        this.display = 'none';
    }

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
