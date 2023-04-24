import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { SoftwareReceiveFileRoutingModule } from './software-receive-file-routing.module';
import { SoftwareReceiveFileComponent } from './software-receive-file.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    SoftwareReceiveFileComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    SoftwareReceiveFileRoutingModule
  ]
})
export class SoftwareReceiveFileModule { }
