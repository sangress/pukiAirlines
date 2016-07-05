/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PlaneDetailsComponent } from './plane-details.component';

describe('Component: PlaneDetails', () => {
  it('should create an instance', () => {
    let component = new PlaneDetailsComponent();
    expect(component).toBeTruthy();
  });
});
