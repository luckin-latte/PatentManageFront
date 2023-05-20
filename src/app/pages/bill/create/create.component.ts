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
  CreateForm!: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit(): void {
    this.CreateForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      agent: [null],
      director: [null],
      tel: [null],
      email: [null, [Validators.email]],
      address: [null],
      remark: [null]
    });
  }

  public cancel() {
  }

  public save(): void {
    for (const i in this.CreateForm.controls) {
      this.CreateForm.controls[i].markAsDirty();
      this.CreateForm.controls[i].updateValueAndValidity();
    }
    console.log('新增代理机构')
  }

}
