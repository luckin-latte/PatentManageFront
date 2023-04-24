import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { ReviewComponent, } from './review/review.component';
import { FileComponent } from './file/file.component';

@Component({
  selector: 'app-my-proposal',
  templateUrl: './my-proposal.component.html',
  styleUrls: ['./my-proposal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProposalComponent implements OnInit {

  myProposalSet = [
    {
      number: '1',
      code: 'T2019',
      name: '检索系统',
      date: '2023-03-09',
      inventor: '小明',
      status: '在审',
      type: '软著'
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  dateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      proposalName: ['proposalName'],
      proposalCode: ['proposalCode'],
      proposalType: ['0'],
      inventorName: ['inventorName'],
      inventorCode: ['inventorCode'],
      proposalStatus: ['0'],
      dateRangePicker: [[]]
    });
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset();
  }

  public search(): void {

  }

  openReviewDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '审批详情',
      nzContent: ReviewComponent,
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

  openFileDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '文件详情',
      nzContent: FileComponent,
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
      console.log('展示文件详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }
  
}
