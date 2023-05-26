import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { PatentOfficialFeeService } from './patent-official-fee.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-patent-official-fee',
  templateUrl: './patent-official-fee.component.html',
  styleUrls: ['./patent-official-fee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatentOfficialFeeComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private patentOfficialFeeService: PatentOfficialFeeService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('name', new FormControl(''));
    this.searchForm.addControl('code', new FormControl(''));
    this.searchForm.addControl('proposer', new FormControl(''));
    this.searchForm.addControl('total', new FormControl(''));
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
      proposer: '',
      total: ''
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

    this.patentOfficialFeeService.fetchData(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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
      } else if (key === 'proposer') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposer',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'total') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'total',
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

  public showDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '专利官费详情',
      nzContent: DetailComponent,
      nzContentParams: {
        name: 'This is a param from child'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 960,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('专利官费详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
