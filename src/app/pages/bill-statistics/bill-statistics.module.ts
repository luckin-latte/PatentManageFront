import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { BillStatisticsRoutingModule } from './bill-statistics-routing.module';
import { BillStatisticsComponent } from './bill-statistics.component';

@NgModule({
  declarations: [
    BillStatisticsComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    BillStatisticsRoutingModule
  ]
})
export class BillStatisticsModule { }
