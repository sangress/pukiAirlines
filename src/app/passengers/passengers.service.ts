import { Injectable, Inject } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import {IPassnger, AppStore} from '../interfaces';
import {Store} from '@ngrx/store';
import {LocalStorageService} from '../local-storage.service';

import 'lodash';
declare let _;

@Injectable()
export class PassengersService {
    passengers: {} = [];
    localStorageService: LocalStorageService;

    constructor(private store:Store<AppStore>) {
        this.localStorageService = new LocalStorageService();

        store.select('passengers').subscribe(
            passengers => {
                this.passengers = passengers;
                this.localStorageService.set('passengers', passengers);
            }
        
        );
    }

    addPassenger(passenger: IPassnger) {
        passenger.id = this.generateId();
        this.store.dispatch({type: 'ADD_PASSENGER', payload: passenger});
    }

    removePassenger(passenger: IPassnger) {
        this.store.dispatch({type: 'REMOVE_PASSENGER', payload: passenger});
    }

    updatePassenger(passenger: IPassnger) {
        this.store.dispatch({type: 'UPDATE_PASSENGER', payload: passenger});
    }

    generateId(): number {
        return _.get(_.last(this.passengers), 'id', 0) + 1;
    }
}

