import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-software-official-fee',
  templateUrl: './software-official-fee.component.html',
  styleUrls: ['./software-official-fee.component.css']
})
export class SoftwareOfficialFeeComponent implements OnInit {

  pantentAnnualFeeSet = [
    {
      number: '1',
      code: 'ZL1234',
      name: '检索系统',
      proposer: '提案人',
      totalAmount: '2000'
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
      patentCode: ['trademarkCode'],
      patentName: ['trademarkName'],
      totalAmount: ['2000'],
      proposer: ['提案人']
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

  public showDetail() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '专利官费详情',
      nzContent: DetailComponent,
      nzContentParams: {
        name: 'This is a param from child'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 860,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('专利官费详情');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }
  
}
