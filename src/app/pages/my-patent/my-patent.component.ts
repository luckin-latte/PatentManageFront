import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { MyPatentService } from './my-patent.service';
import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';

import { BonusComponent } from './bonus/bonus.component';
import { EditComponent } from './edit/edit.component';
import { FileListComponent } from './file-list/file-list.component';

@Component({
  selector: 'app-my-patent',
  templateUrl: './my-patent.component.html',
  styleUrls: ['./my-patent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPatentComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  // 下拉搜索框数据
  listOfAgency: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
    private nzDrawerService: NzDrawerService,
    private myPatentService: MyPatentService
    ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('patentName', new FormControl(''));
    this.searchForm.addControl('patentCode', new FormControl(''));
    this.searchForm.addControl('inventorName', new FormControl(''));
    this.searchForm.addControl('patentType', new FormControl('0'));
    this.searchForm.addControl('currentProgram', new FormControl('0'));
    this.searchForm.addControl('rightStatus', new FormControl('0'));
    this.searchForm.addControl('agency', new FormControl('0'));
  }

  ngOnInit(): void {
    this.search(true);
  }

  searchAgency(e: string): void {
    this.libService.getAllAgency().subscribe((res: any) => {
      // console.log('代理机构列表', .data)
      res.data.agencyNameList.forEach((item: string) => {
        this.listOfAgency.push({
          value: item,
          text: item
        });
      });
    });
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  // 重置查询表单
  public resetForm(): void {
    this.searchForm.reset({
      patentCode: '',
      patentName: '',
      inventorName: '',
      patentType: '0',
      currentProgram: '0',
      rightStatus: '0',
      agency: '0'
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

    this.myPatentService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'patentCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'patentName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentName',
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
      } else if (key === 'patentType') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentType',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'currentProgram') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'currentProgram',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'rightStatus') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'rightStatus',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'agency') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'agency',
            this.searchForm.controls[key].value
          )
        );
      }
    }
    
    const userInfoString = sessionStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      queryCriteria.addCriteria(
        new QueryCriteriaInfo(
          'userId',
          userInfo.userId
        )
      );
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

  public showBonus() {
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

  public showFile() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '文件详情',
      nzContent: FileListComponent,
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

  public edit() {
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
