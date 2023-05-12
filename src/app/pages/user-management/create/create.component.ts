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
  public CreateForm: FormGroup;
  public drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.CreateForm = this.formBuilder.group({
        userName: ['管理员'],
        userCode: ['2023074'],
        department: [''],
        role: ['0'],
        password: ['applyCode'],
        tel: ['01234'],
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
