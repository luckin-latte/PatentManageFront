import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  @Input() name!: string;
  CreateForm: FormGroup;

  // 下拉搜索框数据
  listOfAgency: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private libService: LibService,
    private billService: BillService
    ) {
      this.CreateForm = this.formBuilder.group({
        billCode: ['', [Validators.required]],
        proposalName: [''],
        agency: [''],
        dueAmount: ['', [Validators.required]],
        payStatus: ['', [Validators.required]],
        actualPay: [''],
        actualPayDate: [''],
        remark: ['']
      });
  }

  ngOnInit(): void {
    this.libService.getCode('ZD').subscribe((res: any) =>{
      // console.log('账单编号：', res.data);
      this.CreateForm.get('billCode')?.setValue(res.data);
      this.CreateForm.get('billCode')?.disable();
    })
  }

  searchAgency(e: string): void {
    this.libService.getAllAgency().subscribe((res: any) => {
      // console.log('代理机构列表', .data)
      res.data.agencyNameList.forEach((item: string) => {
        this.listOfAgency.push({
          value: item,
          text: item
        });
      });
    });
  }

  public cancel() {
    this.drawerRef.close(false);
  }

  public save(): void {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.CreateForm.value)

    this.billService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(false);
  }
}
