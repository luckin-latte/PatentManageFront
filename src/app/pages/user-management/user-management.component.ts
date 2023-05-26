import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { UserManagementService } from './user-management.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';

interface ItemData {
  number: string;
  userName: string;
  userCode: string;
  tel: string;
  role: string;
  password: string
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {

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
    private userManagementService: UserManagementService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('name', new FormControl(''));
    this.searchForm.addControl('code', new FormControl(''));
    this.searchForm.addControl('proposer', new FormControl(''));
    this.searchForm.addControl('status', new FormControl('0'));
    this.searchForm.addControl('dateRange', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      name: '',
      code: '',
      proposer: '',
      type: '0',
      dateRange: ''
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

    this.userManagementService.fetchData(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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
      } else if (key === 'type') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'type',
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
  
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增用户',
      nzContent: CreateComponent,
      nzContentParams: {
        name: '新增用户'
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
      console.log('新增用户');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public startEdit(number: string): void {
    this.editCache[number].edit = true;
  }

  public cancelEdit(number: string): void {
    const index = this.listOfData.findIndex(item => item.number === number);
    this.editCache[number] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  public saveEdit(number: string): void {
    const index = this.listOfData.findIndex(item => item.number === number);
    Object.assign(this.listOfData[index], this.editCache[number].data);
    this.editCache[number].edit = false;
  }

  public updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.number] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  public deleteRow(number: string): void {
    this.listOfData = this.listOfData.filter(d => d.number !== number);
  }

}
