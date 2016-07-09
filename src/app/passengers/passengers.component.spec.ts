/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Store} from '@ngrx/store';
import {PassengersService} from './passengers.service';
import {AppStore, IPassnger} from '../interfaces';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PassengersComponent } from './passengers.component';

describe('Component: Passengers', () => {
  it('should create an instance', () => {
    let store: Store<AppStore>;
    let passengersService: PassengersService;
    let component = new PassengersComponent(store, passengersService);
    expect(component).toBeTruthy();
  });
});
