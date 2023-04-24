import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalStatisticsComponent } from './proposal-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProposalStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalStatisticsRoutingModule { }
