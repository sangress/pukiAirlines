import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  @ViewChild('lgModal') lgModal: any;
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

    ngAfterViewInit() {
    this.store.select('editPlane').subscribe((p:IPlane) => {
      // first time we get empty object
      if (!_.isEmpty(p)) {
        this.plane = p;     
        this.lgModal.show();
      }      
    });
  }


  updatePlane() {    
    this.planesService.updatePlane(this.plane);
    this.plane = new Plane(0, '', 0); // reset
  }
  
  addPlane() {    
    if (this.plane.id !== 0) {
      return this.updatePlane();
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
