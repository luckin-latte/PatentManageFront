import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillComponent implements OnInit {

  dataSet = [
    {
      billCode: 'ZD23051901',
      proposalName: '检索系统',
      agency: '星星代理',
      status: '已支付',
      dueFee: '800',
      actualPay: '800',
      payDate: '2022-08-06'
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  payDateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService
    ) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      agency: '0',
      billCode: '',
      proposalCode: '',
      dueFee: '',
      actualPay: '',
      payDate: '',
      type: '0',
      status: '0'
    });
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset();
  }
  
  public search(): void {

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
