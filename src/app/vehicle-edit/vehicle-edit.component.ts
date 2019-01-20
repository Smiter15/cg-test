import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  vehicle: any = {};
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private vs: VehicleService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vs.editVehicle(params['id']).subscribe(res => {
        this.vehicle = res;
      });
    });
  }

  createForm() {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      modelYear: ['', Validators.required]
    });
  }

  updateVehicle(id, modelYear) {
    this.route.params.subscribe(params => {
      this.vs.updateVehicle(id, modelYear, params['id']);
      this.router.navigate(['vehicle']);
    });
  }

}
