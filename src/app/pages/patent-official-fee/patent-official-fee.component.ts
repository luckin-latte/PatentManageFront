import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-patent-official-fee',
  templateUrl: './patent-official-fee.component.html',
  styleUrls: ['./patent-official-fee.component.css']
})
export class PatentOfficialFeeComponent implements OnInit {

  patentAnnualFeeSet = [
    {
      number: '1',
      code: 'ZL19502',
      name: '移动终端的壳体',
      proposer: '小文',
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
