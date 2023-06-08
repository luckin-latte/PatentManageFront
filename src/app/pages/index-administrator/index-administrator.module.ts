import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { IndexAdministratorRoutingModule } from './index-administrator-routing.module';
import { IndexAdministratorComponent } from './index-administrator.component';


@NgModule({
  declarations: [
    IndexAdministratorComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    IndexAdministratorRoutingModule
  ]
})
export class IndexAdministratorModule { }
