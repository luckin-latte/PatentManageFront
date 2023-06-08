import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';
import { InvoiceComponent } from 'src/app/shared/component/invoice/invoice.component';

import { PatentAnnualFeeService } from './patent-annual-fee.service';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-patent-annual-fee',
  templateUrl: './patent-annual-fee.component.html',
  styleUrls: ['./patent-annual-fee.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatentAnnualFeeComponent implements OnInit {

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
    private nzMessageService: NzMessageService,
    private patentAnnualFeeService: PatentAnnualFeeService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('patentName', new FormControl(''));
    this.searchForm.addControl('patentCode', new FormControl(''));
    this.searchForm.addControl('annual', new FormControl(''));
    this.searchForm.addControl('feeStatus', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      patentName: '',
      patentCode: '',
      annual: '',
      feeStatus: '0'
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

    this.patentAnnualFeeService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'patentName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'patentCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'annual') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'annual',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'feeStatus') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'feeStatus',
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
      nzTitle: '新增专利年费',
      nzContent: CreateComponent,
      nzContentParams: {
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
      // console.log('新增专利年费');
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
      nzTitle: '编辑专利年费',
      nzContent: EditComponent,
      nzContentParams: {
        patentOfficialFeeInfo: data
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
      // console.log('编辑专利年费');
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
      nzOnOk: () => this.patentAnnualFeeService.deleteData(code).subscribe((res: any) =>{
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
