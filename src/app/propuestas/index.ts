import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Propuestas } from './propuestas';

export const ROUTER_CONFIG = [
    { path: 'propuestas/:id', component: Propuestas },
    { path: 'propuestas', component: Propuestas, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Propuestas
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class PropuestasModule {
    static routes = ROUTER_CONFIG;
}

