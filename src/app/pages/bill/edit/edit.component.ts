import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() billInfo!: object;
  EditForm: FormGroup;
  drawerRef!: NzDrawerRef;

  // 下拉搜索框数据
  listOfAgency: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
    private billService: BillService
    ) {
      this.EditForm = this.formBuilder.group({
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
    console.log('this.agencyInfo', this.billInfo)
    this.EditForm.patchValue(this.billInfo)
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
  }

  public save() {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    console.log('修改结果：', this.EditForm.getRawValue())

    this.billService.updateData(this.EditForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
  }

}
