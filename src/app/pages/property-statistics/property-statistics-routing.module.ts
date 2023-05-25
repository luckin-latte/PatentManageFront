import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyStatisticsComponent } from './property-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PropertyStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyStatisticsRoutingModule { }
