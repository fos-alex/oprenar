import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    styleUrls: ['./cuaderno.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Cuaderno implements OnInit {

    pagina: string;
    defaultPagina: string = "mision";

    constructor(private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.paramMap
            .subscribe((params: ParamMap) => this.initPagina(params.get('pagina') || this.defaultPagina));
    }

    switchPagina(pagina) {
        this.router.navigate(['/propuestas', pagina]);
    }

    initPagina(pagina) {
        this.pagina = pagina;
    }


}
