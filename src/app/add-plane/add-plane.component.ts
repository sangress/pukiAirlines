import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {PlanesService} from '../planes/planes.service';
import {IPlane, AppStore} from '../interfaces';
import {Plane} from '../class/Plane';
import { NgForm } from '@angular/common';
import {Store} from '@ngrx/store';
import {Helper} from '../shared/helper.class';

import 'lodash';
declare let _;

@Component({
  moduleId: module.id,
  selector: 'app-add-plane',
  templateUrl: 'add-plane.component.html',
  styleUrls: ['add-plane.component.css'],
  directives: [MODAL_DIRECTVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  providers: [PlanesService, Helper]
})
export class AddPlaneComponent implements OnInit {
  @Input('plane') plane = new Plane(0, '', 0);
  @Input('type') type = 'primary'; 
  planes: {} = [];
  title = '+ Add Plane';
  formSubmitted: boolean = false;  

  constructor(private planesService: PlanesService, private store: Store<AppStore>, private helper: Helper) {
    
  }

  ngOnInit() {
    this.store.select('planes').subscribe(
      planes => this.planes = planes
    );

    if (this.type == 'update') {
      this.title = 'Update';
    }
    
  }

  updatePlane(planeForm) {
    let plane = this.helper.extractFormValues(planeForm.controls, this.plane.id);
    this.planesService.updatePlane(plane);
    this.plane = new Plane(0, '', 0); // reset
  }
  
  addPlane(planeForm?) {    
    if (this.type == 'update') {
      return this.updatePlane(planeForm);
    }

    this.plane.id = this.generateId();
    this.planesService.addPlane(this.plane);
    this.plane = new Plane(0, '', 0); // reset
  }

  generateId() {
    return _.get(_.last(this.planes), 'id', 0) + 1;
  }

  handleHide(evt, passengerForm) {
    this.formSubmitted = true;
    this.plane = new Plane(0, '', 0);
    
  }
}
