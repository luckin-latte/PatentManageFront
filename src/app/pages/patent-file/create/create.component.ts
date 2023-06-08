import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { PatentFileService } from '../patent-file.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  public CreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private patentFileService: PatentFileService
    ) {
      this.CreateForm = this.formBuilder.group({
        patentName: ['', [Validators.required]],
        patentCode: ['', [Validators.required]],
        fileName: ['', [Validators.required]],
        fileType: ['', [Validators.required]],
        uploadDate: [new Date, [Validators.required]],
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
    console.log('新增数据：', this.CreateForm.value)

    this.patentFileService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }
}
