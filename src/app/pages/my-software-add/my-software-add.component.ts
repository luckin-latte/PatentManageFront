import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-my-software-add',
  templateUrl: './my-software-add.component.html',
  styleUrls: ['./my-software-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySoftwareAddComponent implements OnInit {

  mySoftwareSet = [
    {
      number: '1',
      code: 'T1234',
      name: '电机',
      version: '1.0.0',
      inventor: '发明人',
      devWay: '开发方式',
      registerCode: 'DJ786',
      certiCode: 'ZS3456',
      storeCode: 'FC589',
      status: '生效',
      powerStatus: '有权',
      rightRange: '全部',
      applyDate: '2018-07-05',
      certiDate: '2013-06-04',
      releaseDate: '2016-05-09',
      storeDate: '2015-07-02',
      completeDate: '2024-05-03'
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  proposalDateRange = [];
  applyDateRange = [];
  certiDateRange = [];
  releaseDateRange = [];
  storeDateRange = [];
  completeDateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      softwareCode: ['SW11234'],
      softwareName: ['授课系统'],
      version: ['1.0.0'],
      inventorName: ['inventorName'],
      agency: ['0'],
      devWay: ['devWay'],
      registerCode: ['DJ654'],
      proposalDateRange : [[]],
      applyDateRange : [[]],
      certiCode: ['ZS66464'],
      certiDateRange : [[]],
      releaseDateRange : [[]],
      storeCode: ['FC1567'],
      storeDateRange : [[]],
      completeDateRange : [[]],
      powerStatus: ['0'],
      rightRange: ['权利范围']
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
      nzTitle: '新增软著详情',
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
      console.log('新增软著');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '编辑软著信息',
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
      console.log('编辑软著信息');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
