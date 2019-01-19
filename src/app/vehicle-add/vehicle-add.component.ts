import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {

  vehicleForm: FormGroup;
  constructor(private fb: FormBuilder, private vs: VehicleService) {
    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.fb.group({
      id: ['', Validators.required ],
      modelYear: ['', Validators.required ]
    });
  }

  addVehicle(id: String, modelYear: String) {
    this.vs.addVehicle(id, modelYear);
  }

  ngOnInit() { }

}
