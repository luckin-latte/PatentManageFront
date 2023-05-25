import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { MyProposalService } from './my-proposal.service';
import { ReviewComponent, } from './review/review.component';
import { FileListComponent } from './file-list/file-list.component';
import { ProposalModel } from 'src/app/shared/model/proposal.model';

@Component({
  selector: 'app-my-proposal',
  templateUrl: './my-proposal.component.html',
  styleUrls: ['./my-proposal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProposalComponent implements OnInit {

  myProposalList!: ProposalModel[];

  myProposalSet = [
    {
      code: 'TA22051102',
      name: '检索系统',
      proposer: '小章',
      inventor: '小张，小明，小王',
      department: '应用开发部',
      date: '2022-05-11',
      status: '在审',
      type: '软著'
    },{
      code: 'TA22071203',
      name: '检索系统标志',
      proposer: '小文',
      inventor: '小文，小红',
      department: '设计部',
      date: '2022-07-12',
      status: '在审',
      type: '软著'
    },{
      code: 'TA22072206',
      name: 'ERP系统',
      proposer: '小王',
      inventor: '小王，小明，小聪',
      department: '应用开发部',
      date: '2022-07-22',
      status: '通过',
      type: '商标'
    },{
      code: 'TA22091618',
      name: 'UI组件库',
      proposer: '小江',
      inventor: '小江，小王，小明，小红',
      department: '系统开发部',
      date: '2023-05-12',
      status: '不通过',
      type: '软著'
    },{
      code: 'TA23051207',
      name: '企业知识产权管理系统',
      proposer: '小张',
      inventor: '小张，小明',
      department: '应用开发部',
      date: '2023-05-12',
      status: '在审',
      type: '软著'
    },
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  dateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private myProposalService: MyProposalService
  ) {
    this.searchForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.search();
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

  public search() {
    this.myProposalService.getList().subscribe(((res:any) => {
      console.log(res)
      this.myProposalList = res
    }))
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
      nzContent: FileListComponent,
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
