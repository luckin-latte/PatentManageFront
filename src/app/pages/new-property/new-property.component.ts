import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

  patentCreateForm!: FormGroup;
  sofetwareCreateForm!: FormGroup;
  trademarkCreateForm!: FormGroup;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public get listOfInventor(): FormArray {
    return this.patentCreateForm.get('listOfInventor') as FormArray;
  }

  ngOnInit(): void {
    this.patentCreateForm = this.formBuilder.group({
      patentCode: ['ZL19502'],
      patentName: ['移动终端的壳体'],
      listOfInventor: this.formBuilder.array([
        this.formBuilder.group({
          inventorName: [''],
          rate: []
        })
      ]),
      applyCode: ['AP82059'],
      applyDate: ['2022-02-05'],
      process: ['8'],
      empowerCode: ['授权号'],
      empowerDate: ['2023-05-07'],
      powerStatus: ['3'],
      patentType: ['3'],
      agency: ['1']
    });
    this.sofetwareCreateForm = this.formBuilder.group({
      softwareCode: ['RZ222222'],
      softwareName: ['软著'],
      inventorName: ['软著发明人'],
      agency: ['0'],
      version: ['0.0.1'],
      devWay: ['开发方式'],
      registerCode: ['DJ222222'],
      applyDate: [''],
      certiCode: ['ZS222222'],
      certiDate: [''],
      storeCode: ['FC2222222'],
      storeDate: [''],
      powerStatus: ['0'],
      rightRange: ['全部'],
      proposalDate: [''],
      completeDate: [''],
      releaseDate: ['']
    });
    this.trademarkCreateForm = this.formBuilder.group({
      trademarkCode: ['trademarkCode'],
      trademarkName: ['trademarkName'],
      inventorName: ['inventorName'],
      owner: ['owner'],
      trademarkType: ['0409'],
      copyrightNo: ['1245643'],
      status: ['0'],
      powerStatus: ['0'],
      agency: ['0']
    });
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

}
