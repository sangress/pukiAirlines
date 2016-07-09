/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PassengerDetailsComponent } from './passenger-details.component';

describe('Component: PassengerDetails', () => {
  it('should create an instance', () => {
    let component = new PassengerDetailsComponent();
    expect(component).toBeTruthy();
  });
});
