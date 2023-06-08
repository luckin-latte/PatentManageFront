import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { SoftwareOfficialFeeService } from '../software-official-fee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  fileList: NzUploadFile[] = []
  CreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private softwareOfficialFeeService: SoftwareOfficialFeeService
    ) {
      this.CreateForm = this.formBuilder.group({
        softwareCode: ['', [Validators.required]],
        softwareName: ['', [Validators.required]],
        feeName: ['', [Validators.required]],
        officialFeeStatus: [''],
        dueAmount: ['', [Validators.required]],
        dueDate: ['', [Validators.required]],
        actualPay: [''],
        actualPayDate: [''],
        remark: [''],
      });
  }

  ngOnInit(): void {
  }

  cancel() {
    this.drawerRef.close(false);
  }

  save() {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('修改结果：', this.CreateForm.getRawValue())

    this.softwareOfficialFeeService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }
}
