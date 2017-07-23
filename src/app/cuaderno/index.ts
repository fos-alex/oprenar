import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Cuaderno } from './cuaderno';
import { CuadernoEmpresa } from '../cuaderno/cuaderno-empresa/cuaderno-empresa';
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
        CuadernoEmpresa,
        CuadernoMatriz,
        CuadernoOprenar
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class CuadernoModule {
    static routes = ROUTER_CONFIG;
}

