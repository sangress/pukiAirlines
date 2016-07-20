import { Injectable, Inject } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import {IFlight, AppStore} from '../interfaces';
import {Store} from '@ngrx/store';
import {LocalStorageService} from '../local-storage.service';

import 'lodash';
declare let _;

@Injectable()
export class FlightService {
    fligths: {} = [];
    localStorageService: LocalStorageService;

    constructor(private store:Store<AppStore>) {
        this.localStorageService = new LocalStorageService();

        store.select('flights').subscribe(
            flights => {
                this.fligths = flights;
                this.localStorageService.set('flights', flights);
            }
        
        );
    }

    addFlight(flight: IFlight) {
        flight.id = this.generateId();
        this.store.dispatch({type: 'ADD_FLIGHT', payload: flight});
    }

    removeFlight(flight: IFlight) {
        this.store.dispatch({type: 'REMOVE_FLIGHT', payload: flight});
    }

    updateFlight(flight: IFlight) {
        this.store.dispatch({type: 'UPDATE_FLIGHT', payload: flight});
    }

    generateId(): number {
        return _.get(_.last(this.fligths), 'id', 0) + 1;
    }
}



