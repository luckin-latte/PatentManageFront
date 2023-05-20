import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import { InvoiceComponent } from 'src/app/shared/component/invoice/invoice.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  patentAnnualFeeSet = [
    {
      number: '1',
      name: '申请费',
      status: '已缴费',
      amount: '800',
      date: '2021-04-05',
      actualPay: '800',
      payDate: '2021-04-01',
      remark: ''
    },{
      number: '2',
      name: '公告印刷费',
      status: '已缴费',
      amount: '200',
      date: '2021-05-06',
      actualPay: '200',
      payDate: '2021-05-05',
      remark: ''
    },{
      number: '3',
      name: '实审费',
      status: '已缴费',
      amount: '600',
      date: '2021-04-05',
      actualPay: '600',
      payDate: '2021-04-01',
      remark: ''
    },{
      number: '4',
      name: '优先权要求费',
      status: '已缴费',
      amount: '500',
      date: '2021-04-05',
      actualPay: '500',
      payDate: '2021-04-01',
      remark: ''
    }
  ];

  @Input() name!: string;
  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  modalRef!: NzModalRef;
  
  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
  }

  showCreate() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '新增专利官费',
      nzContent: CreateComponent,
      nzContentParams: {
        name: 'CreateComponent'
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
      console.log('新增专利官费');
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
      console.log('查看发票详情');
    });

    this.modalRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public showEdit() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '编辑专利官费',
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
      console.log('编辑专利官费');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  showDeleteConfirm(): void {
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
