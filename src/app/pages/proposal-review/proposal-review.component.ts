import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { ProposalReviewService } from './proposal-review.service';
import { ApprovalComponent } from './approval/approval.component';

@Component({
  selector: 'app-proposal-review',
  templateUrl: './proposal-review.component.html',
  styleUrls: ['./proposal-review.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalReviewComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类
  public dateRange = [];

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;
  listOfDepart: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private libService: LibService,
    private proposalReviewService: ProposalReviewService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('proposalName', new FormControl(''));
    this.searchForm.addControl('proposalCode', new FormControl(''));
    this.searchForm.addControl('departmentName', new FormControl('0'));
    this.searchForm.addControl('proposerName', new FormControl(''));
    this.searchForm.addControl('inventorName', new FormControl(''));
    this.searchForm.addControl('dateRange', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  searchDepart(e: string): void {
    this.libService.getAllDepartments().subscribe((res: any) => {
      console.log(res.data)
      res.data.forEach((item: string) => {
        this.listOfDepart.push({
          value: item,
          text: item
        });
      });
    });
  }
  
  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      proposalName: '',
      proposalCode: '',
      departmentName: '0',
      proposerName: '',
      inventorName: '',
      dateRange: ''
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

    this.proposalReviewService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
      console.log('返回数据：', res);
      this.dataSet = res.data.list;
      this.onAfterSearch();
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
      } else if (key === 'departmentName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'departmentName',
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
      } else if (key === 'inventorName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'inventorName',
            this.searchForm.controls[key].value
          )
        );
      }
      // else if (key === 'dateRange') {
      //   queryCriteria.addCriteria(
      //     new QueryCriteriaInfo(
      //       'dateRange',
      //       this.searchForm.controls[key].value
      //     )
      //   );
      // }
    }
    queryCriteria.addCriteria(
      new QueryCriteriaInfo(
        'proposalState',
        '在审'
      )
    );

    this.queryInfo.setCriteria(queryCriteria);
    console.log('查询条件：',this.queryInfo)
  }
  
  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  onAfterSearch(): void {
    this.searchLoading = false;
  }

  public approval(code: string, data: object) {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '审批详情',
      nzContent: ApprovalComponent,
      nzContentParams: {
        proposalCode: code,
        proposalInfo: data
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
