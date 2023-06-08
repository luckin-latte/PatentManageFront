import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IndexProposalRoutingModule } from './index-proposal-routing.module';
import { IndexProposalComponent } from './index-proposal.component';


@NgModule({
  declarations: [
    IndexProposalComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzIconModule,
    IndexProposalRoutingModule
  ]
})
export class IndexProposalModule { }
