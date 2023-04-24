import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { PatentPostFileRoutingModule } from './patent-post-file-routing.module';
import { PatentPostFileComponent } from './patent-post-file.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    PatentPostFileComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    PatentPostFileRoutingModule
  ]
})
export class PatentPostFileModule { }
