import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { BonusComponent } from './bonus/bonus.component';
import { FileComponent } from './file/file.component';


@Component({
  selector: 'app-department-trademark',
  templateUrl: './department-trademark.component.html',
  styleUrls: ['./department-trademark.component.css']
})
export class DepartmentTrademarkComponent implements OnInit {

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
      status: '申请中',
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
  openBonusDetail() {
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

  openFileDetail() {
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
