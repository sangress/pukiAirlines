import { Component, OnInit } from '@angular/core';
import {PlaneDetailsComponent} from '../plane-details';
import {AddPlaneComponent} from '../add-plane';
import {PlanesService} from './planes.service';
import {IPlane, AppStore} from '../interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {LocalStorageService} from '../local-storage.service';

import 'lodash';
declare let _;

@Component({
  moduleId: module.id,
  selector: 'app-planes',
  // templateUrl: 'planes.component.html',
  template: `    
    <div class="planes">
      <h1>Planes</h1>
      <app-add-plane></app-add-plane>

      <table class="table">
        <tr>
          <th>id</th>
          <th>Model</th>
          <th>Sits Count</th>
          <th>Actions</th>
        </tr>
        

        <tr *ngFor="let plane of planes | async" (click)="onRowSelected(plane)" [class.selected]="plane.isSelected">
          <td>{{plane.id}}</td>
          <td>{{plane.model}}</td>
          <td>{{plane.sitsCount}}</td>
          <td>
            <button class="btn btn-danger" (click)="removePlane(plane)">Delete</button>
            <!--<button class="btn btn-primary" (click)="updatePlane(plane)">Update</button>-->
            
            <app-add-plane [plane]="getPlaneClone(plane)" [type]="'update'"></app-add-plane>
          </td>
        </tr>
      </table>

      <app-plane-details [plane]="details"></app-plane-details>
    </div>  
    `,
  styleUrls: ['planes.component.css'],
  directives: [PlaneDetailsComponent, AddPlaneComponent],
  providers: [PlanesService]
})
export class PlanesComponent implements OnInit {
  details: any;
  mode = 'Observable';
  // planes: Observable<{}>;
  // planes: {} = [];
  planes: Observable<any>;
  plane: IPlane;

  constructor(private planesService: PlanesService, private store: Store<AppStore>) {
    this.plane = planesService.selectedPlane;
  }

  ngOnInit() {
    this.planes = this.store.select('planes').map(p => p);
  }

  removePlane(plane: IPlane) {
    this.details = null;
    this.planesService.removePlane(plane);
  }

  updatePlane(plane: IPlane) {
    this.planesService.updatePlane(plane);
  }

  getPlaneClone(plane) {
    return _.clone(plane);
  }

  onRowSelected(plane) {
    // console.log(plane);
    this.details = _.clone(plane);    
    this.planesService.selectedPlane = plane;
  }

}
