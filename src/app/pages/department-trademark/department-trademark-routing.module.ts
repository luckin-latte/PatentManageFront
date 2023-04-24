import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentTrademarkComponent } from './department-trademark.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DepartmentTrademarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentTrademarkRoutingModule { }
