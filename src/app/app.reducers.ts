import {ActionReducer, Action} from '@ngrx/store';
import {LocalStorageService} from './local-storage.service';

const defaultRoute = 'home';
const planesInitialState = [];
const passengersInitialState = [];
const editPassengerInitialState = {};
const editPlaneInitialState = {};
const flightsInitialState = [];

import 'lodash';
declare let _;

let localStorageService: LocalStorageService = new LocalStorageService();

export const PlaneReducer:ActionReducer<any> = (state:any = planesInitialState, {type, payload}) => {
    switch (type) {
    case 'ADD_PLANE':            
      return [...state, payload];   

    case 'REMOVE_PLANE': 
      return state.filter(plane => plane !== payload);

    case 'UPDATE_PLANE':
        return state.map(plane => {
            console.log('plane', plane);
            
            if (plane.id === payload.id) {
                // console.log('passenger', passenger, 'payload', payload);

                console.log(_.merge({}, plane, payload));

            }

            return plane.id === payload.id ? _.merge({}, plane, payload) : plane;
        });  

    default:
      return localStorageService.get('planes') || state;
  }
} 



export const RouteReducer: ActionReducer<any> = (state:any = defaultRoute, {type, payload}) => {
    switch (type) {
      case 'UPDATE_ROUTE':
        return state = payload;

      default:
        return state;  
    }
}

export const PassengerReducer:ActionReducer<any> = (state:any = passengersInitialState, {type, payload}) => {
    switch (type) {
    case 'ADD_PASSENGER':            
      return [...state, payload];   

    case 'REMOVE_PASSENGER': 
      return state.filter(passenger => passenger !== payload);

    case 'UPDATE_PASSENGER':
        return state.map(passenger => {            
            return passenger.id === payload.id ? _.merge({}, passenger, payload) : passenger;
        });  

    default:
      return localStorageService.get('passengers') || state;
  }
}

export const EditPassengerReducer:ActionReducer<any> = (state:any = editPassengerInitialState, {type, payload}) => {
    switch (type) {
    case 'EDIT_PASSENGER': 
        console.log('state', payload);
                   
      return _.clone(payload);   
 
    case 'RESET_PASSENGER':
        return {};

    default:
      return state;
  }
}

export const EditPlaneReducer:ActionReducer<any> = (state:any = editPlaneInitialState, {type, payload}) => {
    switch (type) {
    case 'EDIT_PLANE':
      return _.clone(payload);   
 
    case 'RESET_PLANE':
        return {};

    default:
      return state;
  }
}

export const FlightReducer:ActionReducer<any> = (state:any = flightsInitialState, {type, payload}) => {
    switch (type) {
    case 'ADD_FLIGHT':            
      return [...state, payload];   

    case 'REMOVE_FLIGHT': 
      return state.filter(plane => plane !== payload);

    case 'UPDATE_FLIGHT':
        return state.map(flight => {
            return flight.id === payload.id ? _.merge({}, flight, payload) : flight;
        });  

    default:
      return localStorageService.get('flights') || state;
  }
}

export const AppReducers = {
    planes: PlaneReducer, 
    routerState: RouteReducer, 
    passengers: PassengerReducer,
    editPassenger: EditPassengerReducer,
    editPlane: EditPlaneReducer,
    flights: FlightReducer
}
