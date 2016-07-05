import { Component, OnInit, Input } from '@angular/core';

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
  styleUrls: ['plane-details.component.css']
})
export class PlaneDetailsComponent implements OnInit {
  @Input('plane') plane: any;

  constructor() {}

  ngOnInit() {
  }

}
