import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { TrademarkOfficialFeeService } from '../trademark-official-fee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() trademarkOfficialFeeInfo!: object;
  public EditForm: FormGroup;
  public fileList: NzUploadFile[] = []
  
  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private trademarkOfficialFeeService: TrademarkOfficialFeeService
    ) {
      this.EditForm = this.formBuilder.group({
        trademarkCode: ['', [Validators.required]],
        trademarkName: ['', [Validators.required]],
        feeName: ['', [Validators.required]],
        officialFeeStatus: [''],
        dueAmount: ['', [Validators.required]],
        dueDate: ['', [Validators.required]],
        actualPay: [''],
        actualPayDate: [''],
        remark: [''],
        id: ['']
      });
  }

  ngOnInit(): void {
    console.log('this.trademarkOfficialFeeInfo', this.trademarkOfficialFeeInfo)
    this.EditForm.patchValue(this.trademarkOfficialFeeInfo)
  }

  cancel() {
    this.drawerRef.close(false);
  }

  save() {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    console.log('修改结果：', this.EditForm.getRawValue())

    this.trademarkOfficialFeeService.updateData(this.EditForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }

}
