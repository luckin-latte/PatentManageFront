import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { PatentAnnualFeeService } from '../patent-annual-fee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  fileList: NzUploadFile[] = []

  @Input() patentOfficialFeeInfo!: object;
  EditForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private patentAnnualFeeService: PatentAnnualFeeService
    ) {
      this.EditForm = this.formBuilder.group({
        patentCode: ['', [Validators.required]],
        patentName: ['', [Validators.required]],
        feeStatus: [''],
        annual: ['', [Validators.required]],
        dueDate: ['', [Validators.required]],
        actualPay: [''],
        actualPayDate: [''],
        remark: [''],
        id: ['']
      });
  }

  ngOnInit(): void {
    console.log('this.patentOfficialFeeInfo', this.patentOfficialFeeInfo)
    this.EditForm.patchValue(this.patentOfficialFeeInfo)
  }

  cancel() {
    this.drawerRef.close();
  }

  save() {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    console.log('修改结果：', this.EditForm.getRawValue())

    this.patentAnnualFeeService.updateData(this.EditForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close();
  }

}
