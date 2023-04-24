import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { TrademarkReceiveFileRoutingModule } from './trademark-receive-file-routing.module';
import { TrademarkReceiveFileComponent } from './trademark-receive-file.component';


@NgModule({
  declarations: [
    TrademarkReceiveFileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    TrademarkReceiveFileRoutingModule
  ]
})
export class TrademarkReceiveFileModule { }
