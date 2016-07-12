/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {PassengersService} from '../passengers/passengers.service';
import {Helper} from '../shared/helper.class'

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EditPassengerComponent } from './edit-passenger.component';

describe('Component: EditPassenger', () => {
  it('should create an instance', () => {
    let passengersService: PassengersService;
    let helper = new Helper();
    // let component = new EditPassengerComponent(passengersService, helper);
    // expect(component).toBeTruthy();
  });
});
