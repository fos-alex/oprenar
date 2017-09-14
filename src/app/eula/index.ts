import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Eula } from './eula';

export const ROUTER_CONFIG = [
    { path: 'eula', component: Eula, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Eula
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ],
    exports: [
        Eula
    ]
})
export default class EulaModule {
    static routes = ROUTER_CONFIG;
}

