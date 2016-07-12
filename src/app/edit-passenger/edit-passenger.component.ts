import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {IPassnger, AppStore} from '../interfaces';
import { NgForm } from '@angular/common';
import {Passenger} from '../class/Passenger.class';
import {PassengersService} from '../passengers/passengers.service';
import {Helper} from '../shared/helper.class';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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
  // changeDetection: ChangeDetectionStrategy.OnPush : no onPush!!
})
export class EditPassengerComponent implements OnInit {
  @Input('passenger') passenger: IPassnger = new Passenger(0, '', '', '');
  @Input('mode') mode: string = 'new';
  @ViewChild('lgModal') lgModal: any;  

  // workaround to clear form when cancel is occured
  formSubmitted: boolean = false;
  title = '+ Add Passenger';
  modalTitle = 'Add Passenger';

  constructor(private passengersService: PassengersService, private helper: Helper, private store: Store<AppStore>, private changeDetectorRef: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    if (this.mode == 'edit') {
      this.title = 'Update';
    }
  }

  ngAfterViewInit() {
    this.store.select('editPassenger').subscribe((p:IPassnger) => {
     
      if (p.id !== 0) {
        this.modalTitle = 'Update ' + p.fName + ' ' + p.lName;
      } else {
        this.modalTitle = 'Add Passenger';
      }

      // first time we get empty object
      if (!_.isEmpty(p)) {
        this.passenger = p;     
        this.lgModal.show();
      }
      
    });
  }

  updatePassenger() {
    this.passengersService.updatePassenger(this.passenger);
  }

  addPassenger() {    
    if (this.passenger.id !== 0) {
      return this.updatePassenger();
    }

    this.passengersService.addPassenger(this.passenger);    
  }

  handleHide(evt, passengerForm) {
    this.formSubmitted = true;
    this.passenger = new Passenger(0, '', '', '');
    
  }

}
