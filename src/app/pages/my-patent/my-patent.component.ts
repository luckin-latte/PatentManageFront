import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { BonusComponent } from './bonus/bonus.component';
import { FileComponent } from './file/file.component';

@Component({
  selector: 'app-my-patent',
  templateUrl: './my-patent.component.html',
  styleUrls: ['./my-patent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPatentComponent implements OnInit {

  myPatentSet = [
    {
      number: '1',
      code: 'T1234',
      name: '电机',
      inventor: '发明人',
      type: '发明专利',
      applyCode: 'S1345',
      applyDate: '2029-09-08',
      empowerCode: 'S234',
      empowerDate: '2908-09-07',
      status: '待交',
      process: '官方发证'
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

  public openBonusDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '奖金详情',
      nzContent: BonusComponent,
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
      console.log('显示奖金详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public openFileDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '文件详情',
      nzContent: FileComponent,
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
      console.log('显示文件详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
