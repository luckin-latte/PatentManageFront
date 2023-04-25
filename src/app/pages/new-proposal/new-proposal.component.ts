import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent implements OnInit {

  newProposalForm!: FormGroup;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');

  constructor(
    private formBuilder: FormBuilder,
    // private msg: NzMessageService
  ) {
  }

  get listOfInventor(): FormArray {
    return this.newProposalForm.get('listOfInventor') as FormArray;
  }

  ngOnInit(): void {
    this.newProposalForm = this.formBuilder.group({
      proposalCode: ['proposalCode', [Validators.required]],
      proposalName: ['proposalName', [Validators.required]],
      proposerName: ['proposerName', [Validators.required]],
      datePicker: ['', [Validators.required]],
      patentType: ['1'],
      listOfInventor: this.formBuilder.array([
        this.formBuilder.group({
          inventorName: ['inventorName'],
          rate: [100],
        })
      ]),
      detailText: ['']
    });
  }

  addField(e?: MouseEvent): void {
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

  removeField(i: number, e: MouseEvent): void {
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

  resetForm(): void {
    this.newProposalForm.reset();
  }

  submitForm(value: {
    proposalCode: string,
    proposalName: string,
    proposerName: string,
    datePicker: Date,
    patentType: string,
    listOfInventor: [],
    detailText: Text
    }): void {
    for (const key in this.newProposalForm.controls) {
      this.newProposalForm.controls[key].markAsDirty();
      this.newProposalForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

}