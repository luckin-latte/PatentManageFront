import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { CreateComponent } from '../create/create.component';
import { InvoiceComponent } from 'src/app/shared/component/invoice/invoice.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pantentAnnualFeeSet = [
    {
      number: '1',
      status: '已缴费',
      annual: '2012',
      dueFee: '2000',
      dueDate: '2021-04-05',
      actualPay: '2000',
      payDate: '2021-04-01'
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

  public showCreate() {
    this.drawerRef = this.drawerService.create({
      nzTitle: '新增专利年费',
      nzContent: CreateComponent,
      nzContentParams: {
        name: 'This is a param from child'
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
      console.log('新增专利年费');
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

}
