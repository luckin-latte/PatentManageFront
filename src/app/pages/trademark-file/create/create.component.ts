import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
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

  listOfDepart: Array<{ value: string; text: string }> = [];

  listOfRole: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
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
    this.libService.getCode('U').subscribe((res: any) =>{
      console.log('工号：', res.data);
      this.CreateForm.get('userCode')?.setValue(res.data);
    })
  }

  searchDepart(e: string): void {
    this.libService.getAllDepartments().subscribe((res: any) => {
      console.log(res.data)
      res.data.forEach((item: string) => {
        this.listOfDepart.push({
          value: item,
          text: item
        });
      });
    });
  }

  searchRole(e: string): void {
    this.libService.getAllDepartments().subscribe((res: any) => {
      console.log(res.data)
      res.data.forEach((item: string) => {
        this.listOfDepart.push({
          value: item,
          text: item
        });
      });
    });
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
