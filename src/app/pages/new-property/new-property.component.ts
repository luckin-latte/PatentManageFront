import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { LibService } from 'src/app/shared';
import { NewPropertyService } from './new-property.service';


@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

  patentCreateForm: FormGroup;
  sofetwareCreateForm: FormGroup;
  trademarkCreateForm: FormGroup;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');

  // 下拉搜索框数据
  listOfDepart: Array<{ value: string; text: string }> = [];
  listOfAgency: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
    private newPropertyService: NewPropertyService
  ) {
    this.patentCreateForm = this.formBuilder.group({
      patentCode: ['', [Validators.required]],
      patentName: ['', [Validators.required]],
      applicationCode: [''],
      applicationDate: [''],
      grantCode: [''],
      grantDate: [''],
      listOfInventor: this.formBuilder.array([
        this.formBuilder.group({
          inventorName: [''],
          rate: ['0']
        })
      ]),
      departmentName: ['', [Validators.required]],
      agency: [''],
      patentType: ['', [Validators.required]],
      currentProgram: [''],
      rightStatus: ['']
    });
    this.sofetwareCreateForm = this.formBuilder.group({
      softwareCode: ['', [Validators.required]],
      softwareName: ['', [Validators.required]],
      inventorName: [''],
      departmentName: ['', [Validators.required]],
      agency: [''],
      version: ['', [Validators.required]],
      developWay: [''],
      registerCode: [''],
      applicationDate: [''],
      certificateCode: [''],
      certificateDate: [''],
      archiveCode: [''],
      archiveDate: [''],
      rightStatus: [''],
      rightRange: [''],
      proposalDate: [''],
      finishDate: [''],
      publishDate: ['']
    });
    this.trademarkCreateForm = this.formBuilder.group({
      trademarkCode: ['', [Validators.required]],
      trademarkName: ['', [Validators.required]],
      inventorName: [''],
      departmentName: ['', [Validators.required]],
      trademarkOwner: [''],
      trademarkType: ['', [Validators.required]],
      copyRightCode: ['', [Validators.required]],
      currentStatus: [''],
      rightStatus: [''],
      agency: ['']
    });
  }

  ngOnInit(): void {
    this.libService.getCode('ZL').subscribe((res: any) =>{
      // console.log('专利编号：', res.data);
      this.patentCreateForm.get('patentCode')?.setValue(res.data);
      this.patentCreateForm.get('patentCode')?.disable();
    })
    this.libService.getCode('RZ').subscribe((res: any) =>{
      // console.log('软著编号：', res.data);
      this.sofetwareCreateForm.get('softwareCode')?.setValue(res.data);
      this.sofetwareCreateForm.get('softwareCode')?.disable();
    })
    this.libService.getCode('TM').subscribe((res: any) =>{
      // console.log('商标编号：', res.data);
      this.trademarkCreateForm.get('trademarkCode')?.setValue(res.data);
      this.trademarkCreateForm.get('trademarkCode')?.disable();
    })
  }

  searchDepart(e: string): void {
    this.libService.getAllDepartments().subscribe((res: any) => {
      // console.log('部门列表', res.data)
      res.data.forEach((item: string) => {
        this.listOfDepart.push({
          value: item,
          text: item
        });
      });
    });
  }

  searchAgency(e: string): void {
    this.libService.getAllAgency().subscribe((res: any) => {
      // console.log('代理机构列表', .data)
      res.data.agencyNameList.forEach((item: string) => {
        this.listOfAgency.push({
          value: item,
          text: item
        });
      });
    });
  }
  
  public get listOfInventor(): FormArray {
    return this.patentCreateForm.get('listOfInventor') as FormArray;
  }

  public addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.listOfInventor.push(
      this.formBuilder.group({
        inventorName: [null],
        rate: [100],
      })
    );
  }

  public removeField(i: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfInventor.length > 1) {
      this.listOfInventor.removeAt(i);
    }
  }

  public resetForm(): void {
  }

  public submitForm(): void {
  }

  public newPatent() {
    Object.keys(this.patentCreateForm.controls).forEach(key => {
      this.patentCreateForm.controls[key].markAsDirty();
      this.patentCreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增专利：', this.patentCreateForm.value)

    this.newPropertyService.newPatent(this.patentCreateForm.value).subscribe((res: any) =>{
      console.log('新增专利结果: ', res);
    })
  }

  public newSoftware() {
    Object.keys(this.sofetwareCreateForm.controls).forEach(key => {
      this.sofetwareCreateForm.controls[key].markAsDirty();
      this.sofetwareCreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增软著：', this.sofetwareCreateForm.value)

    this.newPropertyService.newSoftware(this.sofetwareCreateForm.value).subscribe((res: any) =>{
      console.log('新增软著结果： ', res);
    })
  }

  public newTrademark() {
    Object.keys(this.trademarkCreateForm.controls).forEach(key => {
      this.trademarkCreateForm.controls[key].markAsDirty();
      this.trademarkCreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增商标：', this.trademarkCreateForm.value)

    this.newPropertyService.newTrademark(this.trademarkCreateForm.value).subscribe((res: any) =>{
      console.log('新增商标结果： ', res);
    })
  }


}
