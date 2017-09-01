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
        },
        ps: {
            '1': [{title: 'Un experto en seguridad comenta', icon: 'envelope.png'},
                {title: 'Narco-Menudeo: Economía de la Aniquilación', icon: 'envelope.png'}],
            '2': [{title: 'Aparece una novedad en materia de política estatal', icon: 'envelope.png'},
                {title: 'En drogas... No perder por goleada', icon: 'envelope.png'}],
            '3': [{title: 'Lucha contra el Narcotráfico', icon: 'envelope.png'},
                {title: 'El director de otra ONG realiza una publicación', icon: 'envelope.png'}]

        },
        pe: {
            '1': [{title: 'Es clave combatir la demanda', icon: 'envelope.png'},
                {title: 'La visión argentina de un flagelo internacional.', icon: 'envelope.png'}],
            '2': [{title: 'Una famosa en los videos online publica una foto', icon: 'envelope.png'},
                {title: 'Prevenir las adicciones desde la escuela', icon: 'envelope.png'}],
            '3': [{title: 'La educación, clave en la lucha contra la droga', icon: 'envelope.png'},
                {title: 'Un diario digital masivo publica una estadística', icon: 'envelope.png'}]
        },
        pld: {
            '1': [{title: 'Radiografía de la unidad de información Financiera', icon: 'envelope.png'},
                {title: 'Cómo funcionan los ROS', icon: 'envelope.png'}],
            '2': [{title: 'Avances en lucha contra el narcotráfico', icon: 'envelope.png'},
                {title: 'Investigación sobre narcotráfico y drogas', icon: 'envelope.png'}],
            '3': [{title: 'Opiniones y percepciones', icon: 'envelope.png'},
                {title: 'Un diario digital masivo publica una estadística', icon: 'envelope.png'}]
        },
        fpj: {
            '1': [{title: 'Publicaciones', icon: 'envelope.png'},
                {title: 'Un funcionario comenta', icon: 'envelope.png'}],
            '2': [{title: 'Consumo en adolescentes', icon: 'envelope.png'},
                {title: 'Expertos internacionales en narcotráfico', icon: 'envelope.png'}],
            '3': [{title: 'Un estudio de CEPAL aparece en la web', icon: 'envelope.png'},
                {title: 'Diputada Enrique', icon: 'globo.svg'}]
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