/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EditFlightComponent } from './edit-flight.component';

describe('Component: EditFlight', () => {
  it('should create an instance', () => {
    let component = new EditFlightComponent();
    expect(component).toBeTruthy();
  });
});
