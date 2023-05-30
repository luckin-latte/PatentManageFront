import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { SoftwareBonusService } from '../software-bonus.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() bonusId!: string;
  @Input() softwareBonusInfo!: object;
  EditForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private softwareBonusService: SoftwareBonusService
    ) {
      this.EditForm = this.formBuilder.group({
        softwareCode: ['', [Validators.required]],
        softwareName: [''],
        bonusType: ['', [Validators.required]],
        releaseStatus: [''],
        inventorName: [''],
        actualRelease: [''],
        bonusId: ['']
      });
  }

  ngOnInit(): void {
    console.log('this.agencyInfo', this.softwareBonusInfo)
    this.EditForm.patchValue(this.softwareBonusInfo)
    this.EditForm.get('proposalCode')?.setValue(this.bonusId);
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

    this.softwareBonusService.updateData(this.EditForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
  }

}
