import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  // templateUrl: 'menu.component.html',
  template: `
  <nav>
      <span>Puki's Airlines</span>
      <ul>
        <li><a [routerLink]="['/planes']">planes</a></li>
        <li><a [routerLink]="['/planes']">passengers</a></li>
        <li><a [routerLink]="['/planes']">flights</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
