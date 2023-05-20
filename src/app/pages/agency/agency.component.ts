import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { AgencyService } from './agency.service';
import { QueryCondition } from 'src/app/shared';
import { QueryInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyComponent implements OnInit {

  dataSet = [
    {
      code: 'DL001',
      name: '星星代理',
      agent: '小张',
      director: '小王',
      tel: '086-1133425',
      email: 'zhang@star.cn',
      address: 'XX省XX市XX区XX大道XX号',
      remark: ''
    }
  ];

  searchForm: FormGroup;
  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;
  
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private agencyService: AgencyService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('name', new FormControl(''));
  }

  ngOnInit(): void {
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  // 获取查询条件
  public queryData(): void {
    const queryCondition = new QueryCondition(); // 创建查询条件类

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
    }
    
    this.queryInfo.setCondition(queryCondition);
    console.log('queryInfo',this.queryInfo)
  }
  
  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      name: ''
    });
  }
  
  // 查询
  public search(reset: boolean = false): void {
    this.onBeforeSearch();

    if (reset) {
      this.queryInfo.pageNumber = 1;
      this.pageIndex = 1;
    }

    this.queryData();
    
  }

  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  onAfterSearch(): void {
    this.searchLoading = false;
  }

  
  public create() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '新增代理机构',
      nzContent: CreateComponent,
      nzContentParams: {
        name: 'CreateComponent'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 520,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('新增代理机构');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '编辑代理机构',
      nzContent: EditComponent,
      nzContentParams: {
        name: 'EditComponent'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 640,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('编辑代理机构');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public delete(): void {
    this.modalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
