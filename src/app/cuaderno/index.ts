import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import AsesorModule from '../asesor';

import { Cuaderno } from './cuaderno';
import { CuadernoOng } from '../cuaderno/cuaderno-ong/cuaderno-ong';
import { CuadernoMision } from '../cuaderno/cuaderno-mision/cuaderno-mision';
import { CuadernoMatriz } from '../cuaderno/cuaderno-matriz/cuaderno-matriz';
import { CuadernoOprenar } from '../cuaderno/cuaderno-oprenar/cuaderno-oprenar';


export const ROUTER_CONFIG = [
    { path: 'cuaderno/:pagina', component: Cuaderno },
    { path: 'cuaderno', component: Cuaderno, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Cuaderno,
        CuadernoMision,
        CuadernoOng,
        CuadernoMatriz,
        CuadernoOprenar
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule,
        AsesorModule
    ]
})
export default class CuadernoModule {
    static routes = ROUTER_CONFIG;
}

