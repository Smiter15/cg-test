import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleGetComponent } from './vehicle-get/vehicle-get.component';

const routes: Routes = [
  {
    path: 'vehicle/add',
    component: VehicleAddComponent
  },
  {
    path: 'vehicle/edit/:id',
    component: VehicleEditComponent
  },
  {
    path: 'vehicle',
    component: VehicleGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
