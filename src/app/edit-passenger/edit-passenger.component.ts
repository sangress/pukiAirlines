import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {IPassnger} from '../interfaces';
import { NgForm } from '@angular/common';
import {Passenger} from '../class/Passenger.class';
import {PassengersService} from '../passengers/passengers.service';
import {Helper} from '../shared/helper.class';

import 'lodash';
declare let _;

@Component({
  moduleId: module.id,
  selector: 'app-edit-passenger',
  templateUrl: 'edit-passenger.component.html',
  styleUrls: ['edit-passenger.component.css'],
  directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  providers: [PassengersService, Helper],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPassengerComponent implements OnInit {
  @Input('passenger') passenger: IPassnger = new Passenger(0, '', '', '');
  @Input('mode') mode: string = 'new';

  // workaround to clear form when cancel is occured
  formSubmitted: boolean = false;
  title = '+ Add Passenger';

  constructor(private passengersService: PassengersService, private helper: Helper) {}

  ngOnInit() {
    if (this.mode == 'edit') {
      this.title = 'Update';
    }
  }

  updatePassenger(passengerForm: any) {
    let passenger = this.helper.extractFormValues(passengerForm.controls, this.passenger.id);
    this.passengersService.updatePassenger(passenger);
  }

  addPassenger(passengerForm?: any) {    
    if (this.mode == 'edit') {
      return this.updatePassenger(passengerForm);
    }

    this.passengersService.addPassenger(this.passenger);    
  }

  handleHide(evt, passengerForm) {
    this.formSubmitted = true;
    this.passenger = new Passenger(0, '', '', '');
    
  }
}
