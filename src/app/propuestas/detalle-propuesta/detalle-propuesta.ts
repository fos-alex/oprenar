import { Component, Directive, Input, Output, EventEmitter, NgModule, ViewContainerRef, Compiler, OnChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Directive({
  selector: 'detalle-propuesta'
})
export class DetallePropuesta implements OnChanges {
  @Input() url: string;
  @Input() seleccionado: boolean;
  @Output() propuestaSeleccionada = new EventEmitter<any>();
  cmpRef: any;
  htmlPropuesta: string = "";

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private http: Http) {}

  ngOnChanges() {
    //this.container.clear();
    this.vcRef.clear();
    const url = this.url;
    if (!url) return;
    this.getTemplate(this.url).subscribe(html => {
      let seleccionado = this.seleccionado;
      this.htmlPropuesta = html['_body'];
      @Component({
        selector: 'detalle-propuesta-activa',
        templateUrl: this.htmlPropuesta
      })
      class DynamicHtmlComponent  {
        @Output() update = new EventEmitter<any>();
        seleccionada: boolean = seleccionado;

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

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}