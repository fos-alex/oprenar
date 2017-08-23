import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./cuaderno.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Cuaderno implements OnInit {

    pagina: string;
    defaultPage: string = "mision";
    svgStyle: any;

    constructor(protected route: ActivatedRoute,
                protected router: Router) {
        AppStorage.addToState('viewCuaderno', true);

    }

    switchPage(pagina) {
        this.router.navigate(['/cuaderno', pagina]);
    }

    initPage(pagina) {
        this.pagina = pagina;
    }

    ngOnInit() {
        this.svgStyle = {
            matriz: {
                cursor: 'pointer'
            },
            oprenar: {
                cursor: 'pointer'
            },
            mision: {
                cursor: 'pointer'
            },
            ong: {
                cursor: 'pointer'
            }
        };

        this.route.paramMap
            .subscribe((params: ParamMap) => this.initPage(params.get('pagina') || this.defaultPage));
    }


}
