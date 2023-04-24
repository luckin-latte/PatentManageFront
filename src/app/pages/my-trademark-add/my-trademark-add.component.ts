import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-my-trademark-add',
  templateUrl: './my-trademark-add.component.html',
  styleUrls: ['./my-trademark-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTrademarkAddComponent implements OnInit {

  myTrademarkSet = [
    {
      number: '1',
      code: 'SB1234',
      name: 'HHUC',
      inventor: '发明人',
      owner: '河海',
      copyrightNo: 'CPN45356',
      type: '0409',
      powerStatus: '有权',
      agency: '代理',
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      trademarkCode: ['trademarkCode'],
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

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset();
  }

  public search(): void {

  }

  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增商标详情',
      nzContent: CreateComponent,
      nzContentParams: {
        name: 'This is a param from child'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 720,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('新增商标');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '编辑商标信息',
      nzContent: EditComponent,
      nzContentParams: {
        name: 'This is a param from child'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 720,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('编辑商标信息');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
