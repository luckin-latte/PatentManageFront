import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillStatisticsComponent } from './bill-statistics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BillStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillStatisticsRoutingModule { }
