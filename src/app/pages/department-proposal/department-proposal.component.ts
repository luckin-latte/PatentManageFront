import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { DepartmentProposalService } from './department-proposal.service';
import { ReviewComponent } from './review/review.component';
import { FileListComponent } from './file-list/file-list.component';

@Component({
  selector: 'app-department-proposal',
  templateUrl: './department-proposal.component.html',
  styleUrls: ['./department-proposal.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentProposalComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public dateRange = [];
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  listOfDepart: Array<{ value: string; text: string }> = [];

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private libService: LibService,
    private departmentProposalService: DepartmentProposalService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('proposalName', new FormControl(''));
    this.searchForm.addControl('proposalCode', new FormControl(''));
    this.searchForm.addControl('proposalType', new FormControl('0'));
    this.searchForm.addControl('proposerName', new FormControl(''));
    this.searchForm.addControl('inventorName', new FormControl(''));
    this.searchForm.addControl('proposalState', new FormControl('0'));
    this.searchForm.addControl('departmentName', new FormControl('0'));
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

  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      proposalName: '',
      proposalCode: '',
      proposalType: '0',
      proposerName: '',
      inventorName: '',
      proposalState: '0',
      departmentName: '0',
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

    this.departmentProposalService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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
      } else if (key === 'inventorName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'inventorName',
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
      } else if (key === 'departmentName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'departmentName',
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
    
    this.queryInfo.setCriteria(queryCriteria);
    console.log('查询条件：',this.queryInfo)
  }
  
  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  onAfterSearch(): void {
    this.searchLoading = false;
  }

  public showReview(code: string) {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '审批详情',
      nzContent: ReviewComponent,
      nzContentParams: {
        proposalCode: code
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
      console.log('打开审批详情');
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
      console.log('打开文件详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
