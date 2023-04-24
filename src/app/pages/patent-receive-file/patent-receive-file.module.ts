import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { PatentReceiveFileRoutingModule } from './patent-receive-file-routing.module';
import { PatentReceiveFileComponent } from './patent-receive-file.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    PatentReceiveFileComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    PatentReceiveFileRoutingModule
  ]
})
export class PatentReceiveFileModule { }
