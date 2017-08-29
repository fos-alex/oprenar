import { Component, ViewChild, Input, NgModule, ViewContainerRef, Compiler, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'notificaciones-popup',
    styleUrls: ['./notificaciones-popup.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NotificacionesPopup {
    @Input() propuestaSeleccionada: number;
    @Input() proyecto: string;
    @ViewChild('messageBody', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

    displayedMessage: string;
    headers: object = {
        pa: {
            '1': [{title: 'Artículo: Drogas y Ciudad de "nadies"', icon: 'envelope.png'},
                {title: 'Entrevista radial a un funcionario', icon: 'envelope.png'}],
            '2': [{title: 'Senador Guadalupe', icon: 'globo.svg'},
                {title: 'Entrevista radial a un funcionario', icon: 'envelope.png'}],
            '3': [{title: 'Fiestas Electrónicas “RAVE”', icon: 'envelope.png'},
                {title: 'Un influyente en los videos online subió un comentario', icon: 'envelope.png'}]
        }
    };

    constructor(
        private compiler: Compiler,
        private http: Http
    ) {}

    ngOnInit() {
        this.displayMessage('1');
    }

    displayMessage(id: string) {
        this.displayedMessage = id;
        this.viewContainer.clear();
        const url = `app/propuestas/notificaciones-popup/${this.proyecto}/notificacion-${this.propuestaSeleccionada}-${id}.html`;
        if (!url) return;
        this.getTemplate(url).subscribe(html => {
            let htmlPropuesta = html['_body'];
            @Component({
                selector: 'mensaje-propuesta',
                templateUrl: htmlPropuesta
            })
            class DynamicHtmlComponent  {

            }

            @NgModule({
                imports: [CommonModule],
                declarations: [DynamicHtmlComponent]
            })
            class DynamicHtmlModule {}

            this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
                .then(factory => {
                    const compFactory = factory.componentFactories
                        .find(x => x.componentType === DynamicHtmlComponent);
                    this.viewContainer.createComponent(compFactory);
                });
        });
    }

    getTemplate(html) {
        return this.http.get(html)
            .map((data) => data);
    }
}
