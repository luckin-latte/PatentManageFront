import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { PatentOfficialFeeService } from '../patent-official-fee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() patentOfficialFeeInfo!: object;
  EditForm: FormGroup;
  fileList: NzUploadFile[] = []

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private patentOfficialFeeService: PatentOfficialFeeService
    ) {
      this.EditForm = this.formBuilder.group({
        patentCode: ['', [Validators.required]],
        patentName: ['', [Validators.required]],
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
    console.log('this.patentOfficialFeeInfo', this.patentOfficialFeeInfo)
    this.EditForm.patchValue(this.patentOfficialFeeInfo)
  }

  public cancel(e: MouseEvent) {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent) {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    // console.log('修改结果：', this.EditForm.getRawValue())

    this.patentOfficialFeeService.updateData(this.EditForm.value).subscribe((res: any) =>{
      // console.log('res.data: ', res);
      const msg = res.message;
        if (res.code === '200') {
          this.nzMessageService.success('编辑成功！');
          this.drawerRef.close(true);
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('编辑失败！');
          }
        }
    })
  }

}
