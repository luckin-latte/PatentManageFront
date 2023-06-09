import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() agencyInfo!: object;
  EditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private agencyService: AgencyService
    ) {
      this.EditForm = this.formBuilder.group({
        agencyName: [null, [Validators.required]],
        agencyCode: [null, [Validators.required]],
        agentName: [null],
        agencyHolder: [null],
        agencyPhone: [null],
        agencyEmail: [null, [Validators.email]],
        agencyAddress: [null],
        agencyRemark: [null]
      });
  }

  ngOnInit(): void {
    // this.agencyService.getAgency(this.agencyInfo).subscribe((res: any) =>{
    //   console.log('返回数据：', res);
      console.log('this.agencyInfo', this.agencyInfo)
      this.EditForm.patchValue(this.agencyInfo)
    // })
  }

  public cancel(e: MouseEvent): void {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent) {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    // console.log('修改结果：', this.EditForm.getRawValue());
    this.agencyService.updateData(this.EditForm.value).subscribe((res: any) =>{
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
