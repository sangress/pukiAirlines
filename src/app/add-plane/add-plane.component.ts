import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {PlanesService} from '../planes/planes.service';
import {IPlane, AppStore} from '../interfaces';
import {Plane} from '../class/Plane';
import { NgForm } from '@angular/common';
import {Store} from '@ngrx/store';

import 'lodash';
declare let _;

@Component({
  moduleId: module.id,
  selector: 'app-add-plane',
  templateUrl: 'add-plane.component.html',
  styleUrls: ['add-plane.component.css'],
  directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  providers: [PlanesService]
})
export class AddPlaneComponent implements OnInit {
  @Input('plane') plane = new Plane(0, '', 0);
  @Input('type') type = 'primary'; 
  planes: {} = [];
  title = '+ Add Plane';  

  constructor(private planesService: PlanesService, private store: Store<AppStore>) {
    
  }

  ngOnInit() {
    this.store.select('planes').subscribe(
      planes => this.planes = planes
    );

    if (this.type == 'update') {
      this.title = 'Update';
    }
    
  }

  updatePlane() {
    this.planesService.updatePlane(this.plane);
    this.plane = new Plane(0, '', 0); // reset
  }
  
  addPlane() {    
    if (this.type == 'update') {
      return this.updatePlane();
    }

    this.plane.id = this.generateId();
    this.planesService.addPlane(this.plane);
    this.plane = new Plane(0, '', 0); // reset
  }

  generateId() {
    return _.get(_.last(this.planes), 'id', 0) + 1;
  }
}
