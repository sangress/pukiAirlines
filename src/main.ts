// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService,
         SEED_DATA }  from 'angular2-in-memory-web-api';
import { MockData }   from './app/mock-data';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { PukiAirlinesAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {provideStore} from '@ngrx/store';
import {AppReducers} from './app/app.reducers';
import {AuthGuard} from './app/auth.guard';
import {AuthService} from './app/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(PukiAirlinesAppComponent, [
  AuthService,
  AuthGuard,
  provideStore(AppReducers),
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: MockData }                // in-mem server data
]).catch(err => console.error(err));

