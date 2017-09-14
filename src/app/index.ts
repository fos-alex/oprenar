import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import PropuestasModule from './propuestas';
import CuadernoModule from './cuaderno';
import CarpetasModule from './carpetas';
import NotificacionesModule from './notificaciones';
import AsesorModule from './asesor';
import BienvenidoModule from './bienvenido';
import FinalModule from './final';
import ResumenModule from './resumen';
import OverlayModule from './overlay';
import EulaModule from './eula';

export const ROUTER_CONFIG = [
  { path: '', loadChildren: () => System.import('./desk') },
];

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
  ],
  imports: [
    NotificacionesModule,
    AsesorModule,
    BienvenidoModule,
    PropuestasModule,
    CuadernoModule,
    CarpetasModule,
    FinalModule,
    ResumenModule,
    OverlayModule,
    EulaModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG;
}
