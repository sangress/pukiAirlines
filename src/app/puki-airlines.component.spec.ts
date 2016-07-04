import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PukiAirlinesAppComponent } from '../app/puki-airlines.component';

beforeEachProviders(() => [PukiAirlinesAppComponent]);

describe('App: PukiAirlines', () => {
  it('should create the app',
      inject([PukiAirlinesAppComponent], (app: PukiAirlinesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'puki-airlines works!\'',
      inject([PukiAirlinesAppComponent], (app: PukiAirlinesAppComponent) => {
    expect(app.title).toEqual('puki-airlines works!');
  }));
});
