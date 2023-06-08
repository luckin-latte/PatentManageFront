import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { SoftwareBonusService } from '../software-bonus.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  CreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private softwareBonusService: SoftwareBonusService
    ) {
      this.CreateForm = this.formBuilder.group({
        softwareCode: ['', [Validators.required]],
        softwareName: [''],
        bonusType: ['', [Validators.required]],
        releaseStatus: [''],
        bonusAmount: ['', [Validators.required]],
        listOfInventor: this.formBuilder.array([
          this.formBuilder.group({
            inventorName: [''],
            actualRelease: ['100'],
          })
        ])
      });
  }

  ngOnInit(): void {
  }

  public cancel() {
    this.drawerRef.close(false);
  }

  public save() {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.CreateForm.value)

    this.softwareBonusService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }

  get listOfInventor(): FormArray {
    return this.CreateForm.get('listOfInventor') as FormArray;
  }

  public addField(e: MouseEvent): void {
    // if (e) {
      e.preventDefault();
    // }
    this.listOfInventor.push(
      this.formBuilder.group({
        inventorName: [''],
        actualRelease: ['100'],
      })
    );
  }

  public removeField(i: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfInventor.length > 1) {
      this.listOfInventor.removeAt(i);
    }
  }

}
