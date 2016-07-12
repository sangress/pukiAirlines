import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MenuComponent} from './menu';
import {PieChartComponent} from './charts/pie-chart';

@Component({
  moduleId: module.id,
  selector: 'puki-airlines-app',
  // templateUrl: 'puki-airlines.component.html',
  template: `
    <app-menu></app-menu>
    <div class="container-fluid app-container">      
      <!-- 
      <div class="side-bar">
        <app-pie-chart></app-pie-chart>
      </div> 
      -->
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['puki-airlines.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent, PieChartComponent],
  encapsulation: ViewEncapsulation.None
})
export class PukiAirlinesAppComponent {
  title = 'puki-airlines works!';
  viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
