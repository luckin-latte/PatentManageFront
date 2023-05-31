import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';
import { InvoiceComponent } from 'src/app/shared/component/invoice/invoice.component';

import { SoftwareOfficialFeeService } from './software-official-fee.service';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-software-official-fee',
  templateUrl: './software-official-fee.component.html',
  styleUrls: ['./software-official-fee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareOfficialFeeComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类
  public dateRange = [];

  drawerRef!: NzDrawerRef;
  modalRef!: NzModalRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private softwareOfficialFeeService: SoftwareOfficialFeeService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('softwareName', new FormControl(''));
    this.searchForm.addControl('softwareCode', new FormControl(''));
    this.searchForm.addControl('totalAmount', new FormControl(''));
    this.searchForm.addControl('feeName', new FormControl(''));
    this.searchForm.addControl('officialFeeStatus', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      softwareName: '',
      softwareCode: '',
      totalAmount: '',
      feeName: '',
      officialFeeStatus: '0'
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

    this.softwareOfficialFeeService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'softwareName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'softwareName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'softwareCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'softwareCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'totalAmount') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'totalAmount',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'feeName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'feeName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'officialFeeStatus') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'officialFeeStatus',
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
      nzTitle: '新增软著官费',
      nzContent: CreateComponent,
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 680,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      // console.log('新增软著官费');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public showInvoice() {
    this.modalRef = this.modalService.create({
      nzTitle: '发票详情',
      nzContent: InvoiceComponent,
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

    this.modalRef.afterOpen.subscribe(() => {
      // console.log('查看发票详情');
    });

    this.modalRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit(data: object) {
    this.drawerRef = this.drawerService.create({
      nzTitle: '编辑软著官费',
      nzContent: EditComponent,
      nzContentParams: {
        softwareOfficialFeeInfo: data
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 680,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      // console.log('编辑软著官费');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public delete(code: string): void {
    this.modalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => this.softwareOfficialFeeService.deleteData(code).subscribe((res: any) =>{
        console.log('删除数据：', res);
      }),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消删除')
    });
  }

}
