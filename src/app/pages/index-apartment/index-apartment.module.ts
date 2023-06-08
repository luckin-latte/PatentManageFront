import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { IndexApartmentRoutingModule } from './index-apartment-routing.module';
import { IndexApartmentComponent } from './index-apartment.component';


@NgModule({
  declarations: [
    IndexApartmentComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    IndexApartmentRoutingModule
  ]
})
export class IndexApartmentModule { }
