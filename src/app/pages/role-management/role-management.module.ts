import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    RoleManagementComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzDrawerModule,
    NzPopconfirmModule,
    NzMessageModule,
    RoleManagementRoutingModule
  ]
})
export class RoleManagementModule { }
