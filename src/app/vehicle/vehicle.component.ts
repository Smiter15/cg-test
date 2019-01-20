import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicle: any = {};

  constructor(private route: ActivatedRoute, private vs: VehicleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vs.getVehicle(params['id']).subscribe(res => {
        this.vehicle = res;
      });
    });
  }

}
