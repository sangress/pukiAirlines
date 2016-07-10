import { RouterConfig }          from '@angular/router';
import {PassengersComponent} from './passengers.component';
import {AuthGuard} from '../auth.guard';

export const PassengersRoutes: RouterConfig = [
    { path: 'passengers', component: PassengersComponent, canActivate: [AuthGuard] }
];
