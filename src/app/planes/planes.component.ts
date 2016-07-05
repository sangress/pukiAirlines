import { Component, OnInit } from '@angular/core';
import {PlaneDetailsComponent} from '../plane-details';
import {AddPlaneComponent} from '../add-plane';

@Component({
  moduleId: module.id,
  selector: 'app-planes',
  // templateUrl: 'planes.component.html',
  template: `    
    <div class="planes">
      <!--<div class="add-btn">
        <span>+ Add Plane</span>
      </div>-->
      <app-add-plane></app-add-plane>
      
      <table class="table">
        <tr>
          <th>id</th>
          <th>Model</th>
          <th>Sits Count</th>
          <th>Actions</th>
        </tr>

        <tr *ngFor="let plane of planes" (click)="onRowSelected(plane)" [class.selected]="plane.isSelected">
          <td>{{plane.id}}</td>
          <td>{{plane.model}}</td>
          <td>{{plane.sitsCount}}</td>
          <td>{{plane.actions}}</td>
        </tr>
      </table>

      <app-plane-details [plane]="details"></app-plane-details>
    </div>  
    `,
  styleUrls: ['planes.component.css'],
  directives: [PlaneDetailsComponent, AddPlaneComponent]
})
export class PlanesComponent implements OnInit {
  details: any;
  planes = [
    {id: 1, model: 'B747', sitsCount :3, actions: ''},
    {id: 2, model: 'A747', sitsCount :3, actions: ''},
    {id: 3, model: 'F747', sitsCount :3, actions: ''}
  ]

  constructor() {}

  ngOnInit() {
  }

  onRowSelected(plane) {
    // console.log(plane);
    this.details = plane;    
  }

}
