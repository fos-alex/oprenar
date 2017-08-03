import { Component, Input } from '@angular/core';
import { Notificaciones } from '../notificaciones';

@Component({
    selector: 'notificaciones-popup',
    styleUrls: ['./notificaciones-popup.scss']
})
export class NotificacionesPopup extends Notificaciones {
    @Input() show: boolean;


}
