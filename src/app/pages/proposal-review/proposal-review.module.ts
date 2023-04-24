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
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { ProposalReviewRoutingModule } from './proposal-review-routing.module';
import { ProposalReviewComponent } from './proposal-review.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [
    ProposalReviewComponent,
    ApprovalComponent
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
    NzUploadModule,
    NzDrawerModule,
    NzTabsModule,
    ProposalReviewRoutingModule
  ]
})
export class ProposalReviewModule { }
