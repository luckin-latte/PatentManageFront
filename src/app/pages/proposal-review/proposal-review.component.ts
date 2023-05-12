import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { ApprovalComponent } from './approval/approval.component';

@Component({
  selector: 'app-proposal-review',
  templateUrl: './proposal-review.component.html',
  styleUrls: ['./proposal-review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalReviewComponent implements OnInit {

  dataSet = [
    {
      number: '1',
      code: 'TA23051207',
      name: '企业知识产权管理系统',
      proposer: '小张',
      inventor: '小张，小明',
      department: '应用开发部',
      date: '2023-05-12',
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  dateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
    ) {

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      proposalName: ['proposalName'],
      proposalCode: ['proposalCode'],
      inventorName: ['inventorName'],
      department: ['0'],
      proposerName: ['proposerName'],
      proposerCode: ['proposerCode'],
      dateRangePicker: [[]]
    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  resetForm(): void {
    this.searchForm.reset();
  }

  openApproval() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '审批详情',
      nzContent: ApprovalComponent,
      nzContentParams: {
        name: 'This is a param from child'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 720,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('展示审批详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
