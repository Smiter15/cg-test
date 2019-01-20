import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  uri = 'http://localhost:4000/vehicle';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get(`${this.uri}`);
  }

  getVehicle(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  addVehicle(id, modelYear) {
    const vehicle = {
      id,
      modelYear,
      url: `/api/vehicle/${id}`,
      media: [{
        name: 'vehicle',
        url: `/images/${id}_${modelYear}.jpg`
      }]
    };
    return this.http.post(`${this.uri}/add`, vehicle);
  }

  editVehicle(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateVehicle(id, modelYear, mongoId) {
    this.http.post(`${this.uri}/update/${mongoId}`, {id, modelYear});
  }

  deleteVehicle(mongoId) {
    return this.http.get(`${this.uri}/delete/${mongoId}`);
  }
}
