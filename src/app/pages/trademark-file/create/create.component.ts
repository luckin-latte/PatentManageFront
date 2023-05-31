import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { TrademarkFileService } from '../trademark-file.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  public CreateForm: FormGroup;
  public drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private trademarkFileService: TrademarkFileService
    ) {
      this.CreateForm = this.formBuilder.group({
        trademarkName: ['', [Validators.required]],
        trademarkCode: ['', [Validators.required]],
        fileName: ['', [Validators.required]],
        fileType: ['', [Validators.required]],
        uploadDate: [new Date, [Validators.required]],
      });
  }

  ngOnInit(): void {
  }

  cancel() {
  }

  save() {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.CreateForm.value)

    this.trademarkFileService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
  }
}
