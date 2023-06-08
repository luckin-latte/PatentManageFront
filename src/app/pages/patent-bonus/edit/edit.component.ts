import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

import { PatentBonusService } from '../patent-bonus.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() bonusId!: string;
  @Input() patentBonusInfo!: object;
  EditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private patentBonusService: PatentBonusService
    ) {
      this.EditForm = this.formBuilder.group({
        patentCode: ['', [Validators.required]],
        patentName: [''],
        bonusType: ['', [Validators.required]],
        releaseStatus: [''],
        inventorName: [''],
        actualRelease: [''],
        bonusId: ['']
      });
  }

  ngOnInit(): void {
    console.log('this.agencyInfo', this.patentBonusInfo)
    this.EditForm.patchValue(this.patentBonusInfo)
    this.EditForm.get('bonusId')?.setValue(this.bonusId);
  }

  public cancel(e: MouseEvent): void {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent) {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    // console.log('修改结果：', this.EditForm.getRawValue())

    this.patentBonusService.updateData(this.EditForm.value).subscribe((res: any) =>{
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
