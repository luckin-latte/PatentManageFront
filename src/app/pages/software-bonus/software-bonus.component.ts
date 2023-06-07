import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { SoftwareBonusService } from './software-bonus.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-software-bonus',
  templateUrl: './software-bonus.component.html',
  styleUrls: ['./software-bonus.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareBonusComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private nzModalService: NzModalService,
    private softwareBonusService: SoftwareBonusService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('softwareName', new FormControl(''));
    this.searchForm.addControl('softwareCode', new FormControl(''));
    this.searchForm.addControl('version', new FormControl(''));
    this.searchForm.addControl('bonusAmount', new FormControl(''));
    this.searchForm.addControl('bonusType', new FormControl('0'));
    this.searchForm.addControl('releaseStatus', new FormControl('0'));
    this.searchForm.addControl('inventorName', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      softwareName: '',
      softwareCode: '',
      version: '',
      bonusAmount: '',
      bonusType: '0',
      releaseStatus: '0',
      inventorName: ''
    });
  }
  
  // 查询
  public search(reset: boolean = false): void {
    this.onBeforeSearch();

    if (reset) {
      this.queryInfo.pageIndex = 1;
      this.pageIndex = 1;
    }

    this.queryData();

    this.softwareBonusService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
      console.log('返回数据：', res);
      this.dataSet = res.data.list;
      this.onAfterSearch();
    })

  }
  
  // 获取查询条件
  public queryData(): void {
    const queryCriteria = new QueryCriteria(); // 创建查询条件类

    for (const key of Object.keys(this.searchForm.controls)) {
      if (
        Array.isArray(this.searchForm.controls[key].value) &&
        this.searchForm.controls[key].value.length === 0
      ) {
        continue;
      }
      if (this.searchForm.controls[key].value === '') {
        continue;
      }

      if (key === 'softwareName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'softwareName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'softwareCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'softwareCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'version') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'version',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'bonusAmount') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'bonusAmount',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'bonusType') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'bonusType',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'releaseStatus') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'releaseStatus',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'inventorName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'inventorName',
            this.searchForm.controls[key].value
          )
        );
      }
    }
    
    this.queryInfo.setCriteria(queryCriteria);
    console.log('查询条件：',this.queryInfo)
  }
  
  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  onAfterSearch(): void {
    this.searchLoading = false;
  }

  // // 数据相同合并单元格
  // private mergeTableData(rawDataList): any[] {
  //   const rowspan = this.mergeFix, mergeColumns = this.mergeColumns;

  //   if (rawDataList.length > 1) {// 长度⼤于1才有资格进⼀步处理
  //     const arr = rawDataList;
  //     const aLen = arr.length;

  //     for (let i = mergeColumns.length - 1; i >= 0; i--) {// 先迭代待合并列
  //       let index = 0;
  //       const title = mergeColumns[i];
  //       let span = 1;// 合并列属性默认为1

  //       for (let j = 0; j < aLen; j++) {
  //         const meragePageIndex = Math.ceil((index + 1) / this.pageSize3);
  //         const comp = arr[index][title];
  //         // 不是合并行的project_code会被删掉，用compare_code代替
  //         const projectCode = arr[index]['compare_code'];
  //         const projectCode2 = arr[j]['compare_code'];
  //         if (arr[j][title] === comp && span < this.pageSize3 && (j + 1) % this.pageSize3 !== 1 && projectCode === projectCode2) {
  //           if (j !== index) {
  //             // eslint-disable-next-line no-unused-expressions
  //             delete arr[j][title], span++;
  //           }
  //           if (j === aLen - 1) {
  //             arr[index][rowspan + title] = span;
  //             arr[index]['meragePageIndex'] = meragePageIndex;
  //           }


  //         } else {
  //           // eslint-disable-next-line no-unused-expressions
  //           span > 1 && (arr[index][rowspan + title] = span, arr[index]['meragePageIndex'] = meragePageIndex, span = 1);
  //           index = j;
  //         }
  //       }
  //     }
  //     return arr;
  //   }
  //   return rawDataList;
  // }
  
  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增软著奖金',
      nzContent: CreateComponent,
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 680,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('新增软著奖金');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit(id:string, data: object) {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '编辑软著奖金',
      nzContent: EditComponent,
      nzContentParams: {
        bonusId: id,
        softwareBonusInfo: data
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 480,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('编辑软著奖金');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public delete(id: string): void {
    this.nzModalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => this.softwareBonusService.deleteData(id).subscribe((res: any) =>{
        console.log('删除数据：', res);
      }),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
