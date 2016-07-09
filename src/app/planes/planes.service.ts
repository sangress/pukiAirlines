import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {IPlane, AppStore} from '../interfaces';
import {Store} from '@ngrx/store';
import {LocalStorageService} from '../local-storage.service';

import 'lodash';
declare let _;

@Injectable()
export class PlanesService {
  selectedPlane: IPlane;
  planesUrl = 'app/planes';
  // public planes: IPlane[];
  planes: Observable<{}>;
  localStorageService: LocalStorageService;

  //@Inject(LocalStorageService) localStorageService: LocalStorageService
  constructor(private http: Http, private store:Store<AppStore>) {
    this.localStorageService = new LocalStorageService();

    this.planes = store.select('planes'); // Bind an observable of our planes to "PlanesService"
    store.select('planes').subscribe(
      planes => {
        // console.log('save', planes);
        this.localStorageService.set('planes', planes);
      }
      
    );
  }

  addPlane(plane: IPlane) {
     this.store.dispatch({type: 'ADD_PLANE', payload: plane});
  }

  removePlane(plane: IPlane) {
    this.store.dispatch({type: 'REMOVE_PLANE', payload: plane});
  }

  updatePlane(plane: IPlane) {
    this.store.dispatch({type: 'UPDATE_PLANE', payload: plane});
  }

  getPlanes(): Observable<IPlane[]> {
    return this.http.get(this.planesUrl)
                    .map(this.extractData)
                    // .catch(this.handleError);
  }

  addPlane1(plane: IPlane) {
    let body = JSON.stringify(plane);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.planesUrl, body, options)
                    .map(this.extractData);
                    // .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log(body);
    
    return body.data || { };
  }
}
