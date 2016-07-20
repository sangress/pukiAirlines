/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FlightService } from './flight-service.service';

describe('FlightService Service', () => {
  beforeEachProviders(() => [FlightService]);

  it('should ...',
      inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
});
