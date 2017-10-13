import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Objetivos } from './objetivos';

export const ROUTER_CONFIG = [
    { path: 'objetivos', component: Objetivos, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Objetivos
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ],
    exports: [
        Objetivos
    ]
})
export default class ObjetivosModule {
    static routes = ROUTER_CONFIG;
}

