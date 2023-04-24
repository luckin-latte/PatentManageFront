import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';


@NgModule({
  declarations: [
    BillComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    BillRoutingModule
  ]
})
export class BillModule { }
