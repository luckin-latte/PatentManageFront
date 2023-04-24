import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector       : 'app-drawer-content',
  templateUrl    : './drawer-content.component.html',
  styleUrls      : [ './drawer-content.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerContentComponent implements OnInit {

  @Input()
  name!: string;
  createForm: FormGroup;

  submit() {
    this.nzDrawerRef.close(this.createForm.getRawValue());
  }

  constructor(
    private nzDrawerRef: NzDrawerRef,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      name       : [ null ],
      description: [ null ],
      deadline   : [ new Date() ]
    });
  }

  ngOnInit() {
  }

}
