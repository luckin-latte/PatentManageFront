import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareStatisticsComponent } from './software-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwareStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareStatisticsRoutingModule { }
