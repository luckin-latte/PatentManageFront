import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareOfficialFeeComponent } from './software-official-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwareOfficialFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareOfficialFeeRoutingModule { }
