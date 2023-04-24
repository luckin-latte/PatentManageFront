import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AgencRoutingModule } from './agenc-routing.module';
import { AgencComponent } from './agenc.component';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';


@NgModule({
  declarations: [
    AgencComponent,
    DrawerContentComponent
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
    NzInputNumberModule,
    NzUploadModule,
    NzDrawerModule,
    DragDropModule,
    ScrollingModule,
    AgencRoutingModule
  ]
})
export class AgencModule { }
