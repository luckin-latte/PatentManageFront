import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentAnnualFeeComponent } from './patent-annual-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentAnnualFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentAnnualFeeRoutingModule { }
