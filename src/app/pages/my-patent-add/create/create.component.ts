import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  @Input() name!: string;
  CreateForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.CreateForm = this.formBuilder.group({
        patentCode: ['patentCode'],
        patentName: ['patentName'],
        inventorName: ['inventorName'],
        applyCode: ['applyCode'],
        applyDate: [''],
        process: ['0'],
        empowerCode: ['applyCode'],
        empowerDate: [''],
        powerStatus: ['0'],
        patentType: ['0'],
        agency: ['0']
      });
  }

  ngOnInit(): void {
  }

  cancel() {
  }

  save() {
    this.drawerRef.close(this.CreateForm.getRawValue());
  }
}
