import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { ParticipatedProposalService } from './participated-proposal.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { ReviewComponent } from './review/review.component';
import { FileListComponent } from './file-list/file-list.component';

@Component({
  selector: 'app-participated-proposal',
  templateUrl: './participated-proposal.component.html',
  styleUrls: ['./participated-proposal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipatedProposalComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类
  public dateRange = [];

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private participatedProposalService: ParticipatedProposalService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('proposalName', new FormControl(''));
    this.searchForm.addControl('proposalCode', new FormControl(''));
    this.searchForm.addControl('proposalType', new FormControl('0'));
    this.searchForm.addControl('proposerName', new FormControl(''));
    this.searchForm.addControl('inventorName', new FormControl(''));
    this.searchForm.addControl('dateRange', new FormControl(''));
    this.searchForm.addControl('proposalState', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      proposalName: '',
      proposalCode: '',
      proposalType: '0',
      proposerName: '',
      inventorName: '',
      dateRange: '',
      proposalState: '0'
    });
  }
  
  // 查询
  public search(reset: boolean = false): void {
    this.onBeforeSearch();

    if (reset) {
      this.queryInfo.pageIndex = 1;
      this.pageIndex = 1;
    }

    this.queryData();

    this.participatedProposalService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
      console.log('返回数据：', res);
      this.dataSet = res.data.list;
      this.onAfterSearch;
    })
  }
  
  // 获取查询条件
  public queryData(): void {
    const queryCriteria = new QueryCriteria(); // 创建查询条件类

    for (const key of Object.keys(this.searchForm.controls)) {
      if (
        Array.isArray(this.searchForm.controls[key].value) &&
        this.searchForm.controls[key].value.length === 0
      ) {
        continue;
      }
      if (this.searchForm.controls[key].value === '') {
        continue;
      }

      if (key === 'proposalName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposalCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposalType') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalType',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposerName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposerName',
            this.searchForm.controls[key].value
          )
        );
      }  else if (key === 'inventorName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'inventorName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'dateRange') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'dateRange',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposalState') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalState',
            this.searchForm.controls[key].value
          )
        );
      }
    }
    
    this.queryInfo.setCriteria(queryCriteria);
    console.log('查询条件：',this.queryInfo)
  }
  
  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  onAfterSearch(): void {
    this.searchLoading = false;
  }

  public showReview() {
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

  public showFile() {
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
