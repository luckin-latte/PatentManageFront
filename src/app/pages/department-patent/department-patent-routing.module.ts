import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentPatentComponent } from './department-patent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DepartmentPatentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentPatentRoutingModule { }
