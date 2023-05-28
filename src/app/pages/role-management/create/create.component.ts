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

  CreateForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.CreateForm = this.formBuilder.group({
        roleName: ['管理员'],
        roleCode: ['2023074'],
        auth: ['没有没有没有']
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
