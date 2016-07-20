import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore, IFlight} from '../interfaces';
import {Flight} from '../class/flight.class';
import {FlightService} from './flight-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-flights',
  // templateUrl: 'flights.component.html',
  template: `
    <div class="flights">
      <h1>Flights</h1>

      <table class="table">
        <tr>
          <th>id</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Date</th>
          <th>Plane</th>
          <th>Actions</th>
        </tr>
        

        <tr *ngFor="let flight of flights | async" (click)="onRowSelected(flight)" [class.selected]="flight.isSelected">
          <td>{{flight.id}}</td>
          <td>{{flight.source}}</td>
          <td>{{flight.destination}}</td>
          <td>{{flight.birthdate | date}}</td>
          <td>{{flight.plane.model}}</td>
          <td>
            <button class="btn btn-danger" (click)="removeFlight(flight)">Delete</button>
            <button class="btn btn-primary" (click)="editFlight(flight)">Update</button>                          
          </td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['flights.component.css'],
  providers: [FlightService]
})
export class FlightsComponent implements OnInit {
  flights: Observable<any>;

  constructor(private store: Store<AppStore>, private flightService: FlightService) {}

  ngOnInit() {
    this.store.dispatch({type: 'UPDATE_ROUTE', payload: 'flights'});
    this.flights = this.store.select('flights').map(f => f);
  }

}
