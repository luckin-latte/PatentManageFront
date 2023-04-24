import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentSoftwareComponent } from './department-software.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DepartmentSoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentSoftwareRoutingModule { }
