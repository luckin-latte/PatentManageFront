import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

import { PatentBonusService } from '../patent-bonus.service';

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
    private nzMessageService: NzMessageService,
    private patentBonusService: PatentBonusService
    ) {
      this.CreateForm = this.formBuilder.group({
        patentCode: ['', [Validators.required]],
        patentName: [''],
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

  public cancel(e: MouseEvent) {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent) {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    // console.log('新增专利奖金：', this.CreateForm.value)

    this.patentBonusService.newData(this.CreateForm.value).subscribe((res: any) =>{
      // console.log('res.data: ', res);
      const msg = res.message;
        if (res.code === '200') {
          this.nzMessageService.success('保存成功！');
          this.drawerRef.close(true);
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('保存失败！');
          }
        }
    })
  }

  get listOfInventor(): FormArray {
    return this.CreateForm.get('listOfInventor') as FormArray;
  }

  public addField(e: MouseEvent): void {
    e.preventDefault();
    
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
