import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { RoleManagementService } from './role-management.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleManagementComponent implements OnInit {

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
    private roleManagementService: RoleManagementService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('roleName', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      roleName: ''
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

    this.roleManagementService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
      console.log('返回数据：', res);
      this.dataSet = res.data.roleList;
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

      if (key === 'roleName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'roleName',
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
  
  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增角色',
      nzContent: CreateComponent,
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 540,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      // console.log('新增角色');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  // editCache: { [key: string]: { edit: boolean; data: any } } = {};

  public startEdit(data: object): void {
    // this.editCache[code].edit = true;
  }

  // public cancelEdit(code: string): void {
  //   const index = this.dataSet.findIndex((item: any) => item.code === code);
  //   this.editCache[code] = {
  //     data: { ...this.dataSet[index] },
  //     edit: false
  //   };
  // }

  // public saveEdit(code: string): void {
  //   const index = this.dataSet.findIndex((item: any) => item.code === code);
  //   Object.assign(this.dataSet[index], this.editCache[code].data);
  //   this.editCache[code].edit = false;
  // }

  // public updateEditCache(): void {
  //   this.dataSet.forEach((item: any) => {
  //     this.editCache[item.code] = {
  //       edit: false,
  //       data: { ...item }
  //     };
  //   });
  // }

  public deleteRow(code: string): void {
    console.log('角色名：', code)
    this.roleManagementService.deleteData(code).subscribe((res: any) =>{
      console.log('删除数据：', res);
    })
  }

}
