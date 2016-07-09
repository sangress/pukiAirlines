import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {AppStore, IPassnger} from '../interfaces';
import {EditPassengerComponent} from '../edit-passenger';
import {PassengersService} from './passengers.service';

import 'lodash';
declare let _;

@Component({
  moduleId: module.id,
  selector: 'app-passengers',
  // templateUrl: 'passengers.component.html',
  template: `
    <div class="planes">
      <h1>Passengers</h1>
      <app-edit-passenger></app-edit-passenger>

      <table class="table">
        <tr>
          <th>id</th>
          <th>Full Name</th>
          <th>Birthdate</th>
          <th>Actions</th>
        </tr>
        

        <tr *ngFor="let passenger of passengers | async" (click)="onRowSelected(passenger)" [class.selected]="passenger.isSelected">
          <td>{{passenger.id}}</td>
          <td>{{passenger.fName}} {{passenger.lName}}</td>
          <td>{{passenger.birthdate | date}}</td>
          <td>
            <button class="btn btn-danger" (click)="removePassenger(passenger)">Delete</button>
            <app-edit-passenger [passenger]="getPassenger(passenger)" [mode]="'edit'"></app-edit-passenger>              
          </td>
        </tr>
      </table>

      
      <!--<app-plane-details [plane]="details"></app-plane-details>-->
    </div>  
  `,
  styleUrls: ['passengers.component.css'],
  directives: [EditPassengerComponent],
  providers: [PassengersService]
})
export class PassengersComponent implements OnInit {
  // passengers: {} = [];
  passengers: Observable<any>;


  constructor(private store: Store<AppStore>, private passengersService: PassengersService) {

  }

  ngOnInit() {
    this.store.dispatch({type: 'UPDATE_ROUTE', payload: 'passengers'});

    this.passengers = this.store.select('passengers').map(p => p);
  }

  removePassenger(passenger: IPassnger) {
    this.passengersService.removePassenger(passenger);
  }

  onRowSelected(passenger) {
    
  }

  getPassenger(passenger: IPassnger): IPassnger {
    return _.clone(passenger);
  }

  handleHide(evt) {
    console.log(evt);    
  }

}
