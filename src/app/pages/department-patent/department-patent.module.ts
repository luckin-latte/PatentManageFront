import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { DepartmentPatentRoutingModule } from './department-patent-routing.module';
import { DepartmentPatentComponent } from './department-patent.component';
import { BonusComponent } from './bonus/bonus.component';
import { FileListComponent } from './file-list/file-list.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    DepartmentPatentComponent,
    BonusComponent,
    FileListComponent,
    EditComponent,
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
    NzDatePickerModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzEmptyModule,
    NzDrawerModule,
    NzMessageModule,
    DepartmentPatentRoutingModule
  ]
})
export class DepartmentPatentModule { }
