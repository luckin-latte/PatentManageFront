import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';


@NgModule({
  declarations: [
    AgencyComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
