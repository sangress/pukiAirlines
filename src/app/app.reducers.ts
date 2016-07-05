import {ActionReducer, Action} from '@ngrx/store';
import {LocalStorageService} from './local-storage.service';

const initialState = [];

let localStorageService: LocalStorageService = new LocalStorageService();

export const PlaneReducer:ActionReducer<any> = (state:any = initialState, {type, payload}) => {
    switch (type) {
    case 'ADD_PLANE':            
      return [...state, payload];   

    case 'REMOVE_PLANE': 
      return state.filter(plane => plane !== payload);

    case 'UPDATE_PLANE':
        return state.map(plane => {
            return plane.id === payload.id ? Object.assign({}, plane, payload) : plane;
        });  

    default:
      return localStorageService.get('planes') || state;
  }
} 
