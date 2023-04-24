import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-my-patent-add',
  templateUrl: './my-patent-add.component.html',
  styleUrls: ['./my-patent-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPatentAddComponent implements OnInit {

  myPatentSet = [
    {
      number: '1',
      code: 'T1234',
      name: '电机',
      inventor: '发明人',
      applyCode: 'S1345',
      applyDate: '2029-09-08',
      empowerCode: 'S234',
      empowerDate: '2908-09-07',
      type: '发明专利',
      status: '待交',
      process: '官方发证',
      agency: '代理',
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  applyDateRange = [];
  empowerDateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      patentCode: ['patentCode'],
      patentName: ['patentName'],
      inventorName: ['inventorName'],
      applyCode: ['applyCode'],
      applyDateRange: [[]],
      process: ['0'],
      empowerCode: ['applyCode'],
      empowerDateRange: [[]],
      powerStatus: ['0'],
      patentType: ['0'],
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

  create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增专利详情',
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
      console.log('新增专利');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  edit() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '编辑专利信息',
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
      console.log('编辑专利信息');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
