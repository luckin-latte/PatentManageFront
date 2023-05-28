import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { BillService } from './bill.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public payDateRange = [];
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private billService: BillService
    ) {
      this.searchForm = this.formBuilder.group({});
      this.searchForm.addControl('agency', new FormControl('0'));
      this.searchForm.addControl('billCode', new FormControl(''));
      this.searchForm.addControl('proposalCode', new FormControl(''));
      this.searchForm.addControl('dueFee', new FormControl(''));
      this.searchForm.addControl('actualPay', new FormControl(''));
      this.searchForm.addControl('payDateRange', new FormControl(''));
      this.searchForm.addControl('type', new FormControl('0'));
      this.searchForm.addControl('status', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  // 选择器远程搜索
  formDropListSearch(): void {
    const getAgencyList = '';
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      agency: '0',
      billCode: '',
      proposalCode: '',
      dueFee: '',
      actualPay: '',
      payDateRange: '',
      type: '0',
      status: '0'
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

    this.billService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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
      } else if (key === 'billCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'billCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'proposalCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'proposalCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'dueFee') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'dueFee',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'actualPay') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'actualPay',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'payDateRange') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'payDateRange',
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
      } else if (key === 'status') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'status',
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
      nzTitle: '新增账单',
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
      console.log('新增账单');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '编辑账单',
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
      console.log('编辑账单');
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
