import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

import { Asesor } from '../asesor/asesor';
import { Overlay } from '../overlay/overlay';

@Component({
    styleUrls: ['./cuaderno.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Cuaderno implements OnInit {

    @ViewChild(Asesor)
    protected asesor: Asesor;

    @ViewChild(Overlay)
    protected overlay: Overlay;

    pagina: string;
    defaultPage: string = "ong";
    svgStyle: any;

    constructor(protected route: ActivatedRoute,
                protected router: Router) {
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

        AppStorage.addToState('viewCuaderno', true);
    }


}
