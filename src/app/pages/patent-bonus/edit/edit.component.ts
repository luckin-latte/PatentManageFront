import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

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

  public cancel(): void {
    this.drawerRef.close(false);
  }

  public save() {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    console.log('修改结果：', this.EditForm.getRawValue())

    this.patentBonusService.updateData(this.EditForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }

}
