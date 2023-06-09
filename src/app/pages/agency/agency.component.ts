import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AgencyService } from './agency.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private nzMessageService: NzMessageService,
    private agencyService: AgencyService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('agencyName', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      agencyName: ''
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

    this.agencyService.getList(this.queryInfo.getRawValue()).subscribe(res =>{
      // console.log('返回数据：', res);
      const msg = res.message;
      if (res.code === '200') {
        this.dataSet = res.data.list;
      } else {
        if (msg) {
          this.nzMessageService.error(msg);
        } else {
          this.nzMessageService.error('查询失败！');
        }
      }
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

      if (key === 'agencyName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'agencyName',
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
    this.drawerRef = this.drawerService.create({
      nzTitle: '新增代理机构',
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
      // console.log('新增代理机构');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
      this.search(true);
    });
  }

  public edit(data: object) {
    this.drawerRef = this.drawerService.create({
      nzTitle: '编辑代理机构',
      nzContent: EditComponent,
      nzContentParams: {
        agencyInfo: data
      },
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
      // console.log('编辑代理机构');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
      this.search(true);
    });
  }

  public delete(code: string): void {
    this.modalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => this.agencyService.deleteData(code).subscribe((res: any) =>{
        // console.log('res.data: ', res);
        const msg = res.message;
        if (res.code === '200') {
          this.nzMessageService.success('删除成功！');
          this.search(true);
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('删除失败！');
          }
        }
      }),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消删除')
    });
  }

}
