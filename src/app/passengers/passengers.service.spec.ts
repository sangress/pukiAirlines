import { By }           from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {PassengersService} from './passengers.service';
import {AppStore, IPassnger} from '../interfaces';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

describe('Service: PassengersService', () => {
  beforeEachProviders(() => [PassengersService]);

  it('Should add a passenger', () => {
    inject([PassengersService], (service: PassengersService) => {
      expect(service).toBeTruthy();
    });
  })
});

// describe('Service: PassengersService', () => {
//   beforeEach(function() {
//     let store: Store<AppStore>;
//     this.store = store;
//     this.passengersService = new PassengersService(store);
//   });

//   it('Should add a passenger', () => {
//     expect(this.passengersService.name).toBe('PassengersService');
//   });
// });


