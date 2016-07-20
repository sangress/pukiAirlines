import { RouterConfig }          from '@angular/router';
import {FlightsComponent} from './flights.component';
import {AuthGuard} from '../auth.guard';

export const FlightsRoutes: RouterConfig = [
    { path: 'flights', component: FlightsComponent/*, canActivate: [AuthGuard]*/ }
];
