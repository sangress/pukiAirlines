import { Component, ViewContainerRef } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MenuComponent} from './menu';

@Component({
  moduleId: module.id,
  selector: 'puki-airlines-app',
  // templateUrl: 'puki-airlines.component.html',
  template: `
    <app-menu></app-menu>
    <div class="container-fluid">
      <h1>The new Puki's Airlines</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['puki-airlines.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent]
})
export class PukiAirlinesAppComponent {
  title = 'puki-airlines works!';
  viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
