import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500',
      url: 'http://www.baidu.com/xxx.png'
    }
  ]

  @Input() name!: string;
  EditForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.EditForm = this.formBuilder.group({
        patentCode: ['ZL6666'],
        annualFee: ['1000'],
        overdue: ['200'],
        agencyFee: ['4500'],
        otherFee: ['1200'],
        totalFee: ['8700'],
        status: ['0'],
        annual: ['2016'],
        dueFee: ['1200'],
        date: ['2017-09-04'],
        actualPay: ['1200'],
        payDate: ['2017-09-04']
      });
  }

  ngOnInit(): void {
  }

  cancel() {
  }

  save() {
    this.drawerRef.close(this.EditForm.getRawValue());
  }

}
