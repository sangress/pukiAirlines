import { provideRouter, RouterConfig } from '@angular/router';
import {PlanesRoutes} from './planes/planes.routes';
import {PassengersRoutes} from './passengers/passengers.routes';
import {HomeRoutes} from './home/home.routes';
import {LoginRoutes} from './login/login.routes';
import {FlightsRoutes} from './flights/flights.routes';

export const routes: RouterConfig = [
    ...LoginRoutes,
    ...HomeRoutes,
    ...PlanesRoutes,
    ...PassengersRoutes,
    ...FlightsRoutes,
  {path: '', redirectTo: '/home', terminal: true},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
