import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Desk } from './desk';

export const ROUTER_CONFIG = [
    { path: '', component: Desk, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        Desk
    ],
    imports: [
        RouterModule.forChild(ROUTER_CONFIG),
        CommonModule
    ]
})
export default class DeskModule {
    static routes = ROUTER_CONFIG;
}

