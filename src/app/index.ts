import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import HomeModule from './home';
import PropuestasModule from './propuestas';
import CuadernoModule from './cuaderno';
import CarpetasModule from './carpetas';
import NotificacionesModule from './notificaciones';
import AsesorModule from './asesor';
import FinalModule from './final';
import ResumenModule from './resumen';

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
    PropuestasModule,
    CuadernoModule,
    CarpetasModule,
    FinalModule,
    ResumenModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG;
}
