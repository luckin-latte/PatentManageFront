import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { UserManagementService } from './user-management.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private userManagementService: UserManagementService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('userName', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      userName: ''
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

    this.userManagementService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'userName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'userName',
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
      nzTitle: '新增用户',
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
      // console.log('新增用户');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  // editCache: { [key: number]: { edit: boolean; data: any } } = {};

  // public startEdit(code: string): void {
  //   this.editCache[code].edit = true;
  // }

  // public cancelEdit(code: number): void {
  //   const index = this.dataSet.findIndex((item: any) => item.code === code);
  //   this.editCache[code] = {
  //     data: { ...this.dataSet[index] },
  //     edit: false
  //   };
  // }

  // public saveEdit(code: number): void {
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


  isVisible = false;
  isOkLoading = false;

  showModal(data: object): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  public deleteRow(code: string): void {
    console.log('工号：', code)
    this.userManagementService.deleteData(code).subscribe((res: any) =>{
      console.log('删除数据：', res);
    })
  }

}
