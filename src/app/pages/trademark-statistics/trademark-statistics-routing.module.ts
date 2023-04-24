import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkStatisticsComponent } from './trademark-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkStatisticsRoutingModule { }
