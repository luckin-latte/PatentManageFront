import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentStatisticsComponent } from './patent-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentStatisticsRoutingModule { }
