import { Component, HostListener, OnInit } from '@angular/core';

import { VehicleService } from '../_services/vehicle.service';

import Vehicle from '../_interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicle-get',
  templateUrl: './vehicle-get.component.html',
  styleUrls: ['./vehicle-get.component.scss']
})
export class VehicleGetComponent implements OnInit {

  public innerWidth: any;
  public isMobileWidth: boolean;

  showAdmin = false;
  vehicles: Vehicle[];

  constructor(private vs: VehicleService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isMobileWidth = (this.innerWidth < 768);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.refreshVehicles();
  }

  refreshVehicles() {
    this.vs.getVehicles()
      .subscribe((data: Vehicle[]) => {
        this.vehicles = data;
      });
  }

  deleteVehicle(mongoId) {
    this.vs.deleteVehicle(mongoId)
      .subscribe(() => this.refreshVehicles());
  }

}
