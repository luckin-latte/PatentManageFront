import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { TrademarkPostFileRoutingModule } from './trademark-post-file-routing.module';
import { TrademarkPostFileComponent } from './trademark-post-file.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    TrademarkPostFileComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    TrademarkPostFileRoutingModule
  ]
})
export class TrademarkPostFileModule { }
