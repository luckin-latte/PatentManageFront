import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentOfficialFeeComponent } from './patent-official-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentOfficialFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentOfficialFeeRoutingModule { }
