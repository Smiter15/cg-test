import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  uri = 'http://localhost:4000/vehicle';

  constructor(private http: HttpClient) { }

  addVehicle(id, modelYear) {
    const obj = {
      id,
      modelYear
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log(res, 'done'));
  }
}
