import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { SoftwarePostFileRoutingModule } from './software-post-file-routing.module';
import { SoftwarePostFileComponent } from './software-post-file.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    SoftwarePostFileComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    SoftwarePostFileRoutingModule
  ]
})
export class SoftwarePostFileModule { }
