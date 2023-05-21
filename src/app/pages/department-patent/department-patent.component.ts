import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { DepartmentPatentService } from './department-patent.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { BonusComponent } from './bonus/bonus.component';
import { FileComponent } from './file/file.component';

@Component({
  selector: 'app-department-patent',
  templateUrl: './department-patent.component.html',
  styleUrls: ['./department-patent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentPatentComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;
  public applyDateRange = [];
  public empowerDateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private departmentPatentService: DepartmentPatentService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('code', new FormControl(''));
    this.searchForm.addControl('name', new FormControl(''));
    this.searchForm.addControl('inventor', new FormControl(''));
    this.searchForm.addControl('applyCode', new FormControl(''));
    this.searchForm.addControl('applyDateRange', new FormControl(''));
    this.searchForm.addControl('process', new FormControl('0'));
    this.searchForm.addControl('empowerCode', new FormControl(''));
    this.searchForm.addControl('empowerDateRange', new FormControl(''));
    this.searchForm.addControl('powerStatus', new FormControl('0'));
    this.searchForm.addControl('patentType', new FormControl('0'));
    this.searchForm.addControl('agency', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      code: '',
      name: '',
      inventor: '',
      applyCode: '',
      applyDateRange: '',
      process: '0',
      empowerCode: '',
      empowerDateRange: '',
      powerStatus: '0',
      patentType: '0',
      agency: '0'
    });
  }
  
  // 查询
  public search(reset: boolean = false): void {
    this.onBeforeSearch();

    if (reset) {
      this.queryInfo.pageNum = 1;
      this.pageIndex = 1;
    }

    this.queryData();

    this.departmentPatentService.fetchData(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'code') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'code',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'name') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'name',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'inventor') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'inventor',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'applyCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'applyCode',
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
      } else if (key === 'process') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'process',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'empowerCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'empowerCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'empowerDateRange') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'empowerDateRange',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'powerStatus') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'powerStatus',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'patentType') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentType',
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


  public openBonusDetail() {
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

  public openFileDetail() {
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
      console.log('显示文件详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }
  
}
