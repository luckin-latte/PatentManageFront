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
  changeDetection: ChangeDetectionStrategy.OnPush
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
      this.onAfterSearch;
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
  
  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增专利奖金',
      nzContent: CreateComponent,
      nzContentParams: {
        name: 'CreateComponent'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 640,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('新增专利奖金');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public edit() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '编辑专利奖金',
      nzContent: EditComponent,
      nzContentParams: {
        name: 'EditComponent'
      },
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 640,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('编辑专利奖金');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public delete(): void {
    this.nzModalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
