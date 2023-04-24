import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkOfficialFeeComponent } from './trademark-official-fee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkOfficialFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkOfficialFeeRoutingModule { }
