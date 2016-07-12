import { RouterConfig }          from '@angular/router';
import {PlanesComponent} from './planes.component';
import {AuthGuard} from '../auth.guard';

export const PlanesRoutes: RouterConfig = [
    { path: 'planes', component: PlanesComponent/*, canActivate: [AuthGuard]*/ }
];
