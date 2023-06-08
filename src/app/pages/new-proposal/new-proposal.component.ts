import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

import { LibService } from 'src/app/shared';
import { NewProposalService } from './new-proposal.service';

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProposalComponent implements OnInit {

  CreateForm: FormGroup;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');

  // 下拉搜索框数据
  listOfDepart: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzMessageService: NzMessageService,
    private libService: LibService,
    private newProposalService: NewProposalService
  ) {
    this.CreateForm = this.formBuilder.group({
      proposalCode: ['', [Validators.required]],
      proposalName: ['', [Validators.required]],
      proposerName: ['', [Validators.required]],
      departmentName: [''],
      datePicker: [new Date(), [Validators.required]],
      patentType: [''],
      listOfInventor: this.formBuilder.array([
        this.formBuilder.group({
          inventorName: [''],
          rate: ['0'],
        })
      ]),
      detailText: ['']
    });
  }

  ngOnInit(): void {
    this.libService.getCode('TA').subscribe((res: any) =>{
      // console.log('提案编号：', res.data);
      this.CreateForm.get('proposalCode')?.setValue(res.data);
      // this.CreateForm.get('proposalCode')?.disable();
    })
  }

  searchDepart(e: string): void {
    this.libService.getAllDepartments().subscribe((res: any) => {
      // console.log('所有部门名称', res.data)
      res.data.forEach((item: string) => {
        this.listOfDepart.push({
          value: item,
          text: item
        });
      });
    });
  }

  public get listOfInventor(): FormArray {
    return this.CreateForm.get('listOfInventor') as FormArray;
  }

  public addField(e: MouseEvent): void {
    e.preventDefault();

    this.listOfInventor.push(
      this.formBuilder.group({
        inventorName: [''],
        rate: ['0'],
      })
    );
  }

  public removeField(i: number, e: MouseEvent): void {
    e.preventDefault();

    if (this.listOfInventor.length > 1) {
      this.listOfInventor.removeAt(i);
    }
  }

  // handleChange({ file, fileList }: NzUploadChangeParam): void {
  //   const status = file.status;
  //   if (status !== 'uploading') {
  //     console.log(file, fileList);
  //   }
  //   if (status === 'done') {
  //     this.msg.success(`${file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     this.msg.error(`${file.name} file upload failed.`);
  //   }
  // }

  public reset(e: MouseEvent): void {
    this.CreateForm.reset({
      proposalName: '',
      proposerName: '',
      departmentName: '',
      datePicker: new Date(),
      patentType:'',
      listOfInventor: this.formBuilder.array([
        this.formBuilder.group({
          inventorName: '',
          rate: '0',
        })
      ]),
      detailText: ''
    });
  }

  public submitForm(e: MouseEvent) {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    // console.log('新增技术提案：', this.CreateForm.value)

    this.newProposalService.newData(this.CreateForm.value).subscribe((res: any) =>{
      // console.log('res.data: ', res);
      const msg = res.message;
        if (res.code === '200') {
          this.nzMessageService.success('保存成功！');
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('保存失败！');
          }
        }
    })
  }

}
