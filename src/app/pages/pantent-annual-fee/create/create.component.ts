import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

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
  CreateForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.CreateForm = this.formBuilder.group({
        trademarkCode: ['1'],
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

  ngOnInit(): void {
  }

  cancel() {
  }

  save() {
    this.drawerRef.close(this.CreateForm.getRawValue());
  }
}
