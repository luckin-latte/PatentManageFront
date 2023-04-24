import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PantentOfficialFeeComponent } from './pantent-official-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PantentOfficialFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantentOfficialFeeRoutingModule { }
