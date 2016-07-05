import { provideRouter, RouterConfig } from '@angular/router';
import {PlanesRoutes} from './planes/planes.routes';

export const routes: RouterConfig = [
    ...PlanesRoutes,
  {path: '', redirectTo: '/planes', terminal: true},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
