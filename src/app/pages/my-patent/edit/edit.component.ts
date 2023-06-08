import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() name!: string;
  EditForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    ) {
      this.EditForm = this.formBuilder.group({
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
    this.drawerRef.close(false);
  }

  save() {
    this.drawerRef.close(false);
  }

}
