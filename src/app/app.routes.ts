import { provideRouter, RouterConfig } from '@angular/router';
import {PlanesRoutes} from './planes/planes.routes';
import {PassengersRoutes} from './passengers/passengers.routes';

export const routes: RouterConfig = [
    ...PlanesRoutes,
    ...PassengersRoutes,
  {path: '', redirectTo: '/planes', terminal: true},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
