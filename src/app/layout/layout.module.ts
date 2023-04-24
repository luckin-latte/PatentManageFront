import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzAvatarModule,
    NzGridModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
