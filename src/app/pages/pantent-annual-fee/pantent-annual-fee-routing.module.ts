import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PantentAnnualFeeComponent } from './pantent-annual-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PantentAnnualFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantentAnnualFeeRoutingModule { }
