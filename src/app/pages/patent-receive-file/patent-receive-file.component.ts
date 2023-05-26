import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { PatentReceiveFileService } from './patent-receive-file.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

@Component({
  selector: 'app-patent-receive-file',
  templateUrl: './patent-receive-file.component.html',
  styleUrls: ['./patent-receive-file.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatentReceiveFileComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private patentReceiveFileService: PatentReceiveFileService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('code', new FormControl(''));
    this.searchForm.addControl('name', new FormControl(''));
    this.searchForm.addControl('type', new FormControl('0'));
    this.searchForm.addControl('agency', new FormControl('0'));
    this.searchForm.addControl('proposer', new FormControl(''));
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
      type: '0',
      agency: '0',
      proposer: ''
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

    this.patentReceiveFileService.fetchData(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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
      } else if (key === 'type') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'type',
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
      } else if (key === 'proposer') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposer',
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
  
  public create() {}

  public showFile() {}

}
