import { Component, OnInit  } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStore} from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  // templateUrl: 'menu.component.html',
  template: `
  <nav>
      <span class="brand">Puki's Airlines</span>
      <ul>
        <li [class.active]="routerState == 'home'" (click)="updateRoute('home')"><a [routerLink]="['/home']">home</a></li>
        <li [class.active]="routerState == 'planes'" (click)="updateRoute('planes')"><a [routerLink]="['/planes']">planes</a></li>
        <li [class.active]="routerState == 'passengers'" (click)="updateRoute('passengers')"><a [routerLink]="['/passengers']">passengers</a></li>
        <li [class.active]="routerState == 'flights'" (click)="updateRoute('flights')"><a [routerLink]="['/flights']">flights</a></li>
      </ul>      
    </nav>
  `,
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {
  routerState: any = {currPath: 'home'};

  constructor(private router: Router, private store: Store<AppStore>) {
    
  }

  ngOnInit() {
    this.store.select('routerState').subscribe(
      routeState => {
        this.routerState = routeState;
        console.log(this.routerState);
        
      }
    );
  }

  updateRoute(route: string) {
    this.store.dispatch({type: 'UPDATE_ROUTE', payload: route});
  }

}
