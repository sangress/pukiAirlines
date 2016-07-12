import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PieChartComponent} from '../charts/pie-chart';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  // templateUrl: 'home.component.html',
  template: `
    <!-- <a [routerLink]="['/login']">login</a> -->
    Welcome Home!
    
  `,
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES, PieChartComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
