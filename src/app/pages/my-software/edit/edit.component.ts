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
        softwareCode: ['RZ1234'],
        softwareName: ['软件著作'],
        inventorName: ['发明人'],
        agency: ['0'],
        version: ['1.0.0'],
        devWay: ['开发方式'],
        registerCode: ['DJ123456'],
        applyDate: [''],
        certiCode: ['ZS123456'],
        certiDate: [''],
        storeCode: ['FC123456'],
        storeDate: [''],
        powerStatus: ['0'],
        rightRange: ['权力范围'],
        proposalDate: ['0'],
        completeDate: ['0'],
        releaseDate: ['0']
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
