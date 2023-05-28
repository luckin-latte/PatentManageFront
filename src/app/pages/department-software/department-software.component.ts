import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { DepartmentSoftwareService } from './department-software.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { BonusComponent } from './bonus/bonus.component';
import { FileListComponent } from './file-list/file-list.component';

@Component({
  selector: 'app-department-software',
  templateUrl: './department-software.component.html',
  styleUrls: ['./department-software.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentSoftwareComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public proposalDateRange = [];
  public applyDateRange = [];
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private departmentSoftwareService: DepartmentSoftwareService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('name', new FormControl(''));
    this.searchForm.addControl('code', new FormControl(''));
    this.searchForm.addControl('inventor', new FormControl(''));
    this.searchForm.addControl('agency', new FormControl('0'));
    this.searchForm.addControl('devWay', new FormControl('0'));
    this.searchForm.addControl('status', new FormControl('0'));
    this.searchForm.addControl('proposalDateRange', new FormControl(''));
    this.searchForm.addControl('applyDateRange', new FormControl(''));
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
      name: '',
      code: '',
      inventor: '',
      agency: '0',
      devWay: '0',
      status: '0',
      proposalDateRange: '',
      applyDateRange: ''
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

    this.departmentSoftwareService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'name') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'name',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'code') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'code',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'agency') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'agency',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'devWay') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'devWay',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'status') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'status',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposalDateRange') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalDateRange',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'applyDateRange') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'applyDateRange',
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

  public showBonus() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '奖金详情',
      nzContent: BonusComponent,
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
      console.log('显示奖金详情');
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
      console.log('显示文件详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
