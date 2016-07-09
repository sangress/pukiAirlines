import { Component, OnInit, Input, Output } from '@angular/core';
import {PlanesService} from '../planes/planes.service';
import {IPlane, AppStore} from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-plane-details',
  // templateUrl: 'plane-details.component.html',
  template: `
    <div class="plane-details" *ngIf="plane">
      <h2>{{plane.model}} Details</h2>
      <table class="plain-table">
        <tr>
          <th>Model</th>
          <th>Sits Count</th>
          <th>Flights</th>
        </tr>

        <tr>
          <td>{{plane.model}}</td>
          <td>{{plane.sitsCount}}</td>
          <td>No Available Flights</td>
        </tr>
      </table>      
    </div>


  `,
  styleUrls: ['plane-details.component.css'],
  providers: [PlanesService]
})
export class PlaneDetailsComponent implements OnInit {
  @Input('plane') plane: any;
  @Output('upPlane') upPlane: any;
  sPlane: IPlane;

  constructor(private planesService: PlanesService) {
    // this.plane = this.planesService.selectedPlane;
    this.sPlane = planesService.selectedPlane;
  }

  ngOnInit() {
  }

}
