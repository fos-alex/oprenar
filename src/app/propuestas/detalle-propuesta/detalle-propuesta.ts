import { Component, Directive, OnInit, Input, Output, EventEmitter, NgModule, ViewContainerRef, Compiler, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Directive({
    selector: 'detalle-propuesta'
})
export class DetallePropuesta implements OnChanges {
    @Input() url: string;
    @Input() id: number;
    @Input() seleccionado: boolean;
    @Output() propuestaSeleccionada = new EventEmitter<any>();
    cmpRef: any;
    htmlPropuesta: string = "";

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private http: Http) {}

    ngOnChanges() {
        this.cambiarPropuesta();
    }

    cambiarPropuesta() {
        //this.vcRef.clear();
        let enterPosition = '-100%';
        if (this.cmpRef) {
            let oldCmpRef = this.cmpRef;
            let oldId = oldCmpRef.instance.id;
            setTimeout(() => { oldCmpRef.destroy()}, 2000);

            if (this.id < oldId) {
                oldCmpRef.instance.changeState('right');
            } else {
                oldCmpRef.instance.changeState('left');
                enterPosition = '100%';
            }
        }

        const url = this.url;
        if (!url) return;
        this.getTemplate(this.url).subscribe(html => {
            let seleccionado = this.seleccionado;
            this.htmlPropuesta = html['_body'];
            @Component({
                selector: 'detalle-propuesta-activa',
                templateUrl: this.htmlPropuesta,
                animations: [
                    trigger(
                        'slidePropuesta',
                        [
                            transition(
                                ':enter', [
                                    style({transform: `translateX(${enterPosition})`}),
                                    animate('1s ease-in', style({transform: 'translateX(0)'}))
                                ]
                            ),
                            state('shown', style({
                                transform: 'translateX(0)'
                            })),
                            state('left', style({})),
                            state('right', style({})),
                            transition('void => *', animate('1s ease-in-out')),
                            transition('* => right',
                                animate('2s ease-in-out', keyframes([
                                        style({opacity: 1, offset: 0}),
                                        style({opacity: 1, transform: 'translateX(100%)', offset: 0.5}),
                                        style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
                                    ]
                                ))),
                            transition('* => left',
                                animate('2s ease-in-out', keyframes([
                                        style({opacity: 1, offset: 0}),
                                        style({opacity: 1, transform: 'translateX(-100%)', offset: 0.5}),
                                        style({opacity: 0, transform: 'translateX(-100%)', offset: 1.0})
                                    ]
                                )))
                        ])
                ],
            })
            class DynamicHtmlComponent implements OnInit {
                @Output() update = new EventEmitter<any>();
                state: string;
                seleccionada: boolean = seleccionado;

                ngOnInit() {
                    this.state = 'shown';
                }

                changeState(state) {
                    this.state = state;
                }

                seleccionarPropuesta(id) {
                    this.seleccionada = !this.seleccionada;
                    this.update.emit({id, seleccionada: this.seleccionada});
                }

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
                    this.cmpRef = this.vcRef.createComponent(compFactory, 0);
                    this.cmpRef.instance.id = this.id;
                    this.cmpRef.instance.update.subscribe(event => {
                        this.propuestaSeleccionada.emit(event);
                    });
                });
        });
    }

    getTemplate(html) {
        return this.http.get(html)
            .map((data) => data);
    }

}