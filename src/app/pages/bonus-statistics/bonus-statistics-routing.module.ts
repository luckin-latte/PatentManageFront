import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BonusStatisticsComponent } from './bonus-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BonusStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusStatisticsRoutingModule { }
