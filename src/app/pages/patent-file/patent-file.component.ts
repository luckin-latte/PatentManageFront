import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { QueryInfo, QueryCriteria, QueryCriteriaInfo } from 'src/app/shared';
import { PatentFileService } from './patent-file.service';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-patent-file',
  templateUrl: './patent-file.component.html',
  styleUrls: ['./patent-file.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatentFileComponent implements OnInit {

  public dataSet: any; // 查询列表资料
  public searchForm: FormGroup;
  public searchLoading = true;
  public queryInfo: QueryInfo = new QueryInfo(); // 创建产生查询条件类
  public dateRange = [];

  drawerRef!: NzDrawerRef;
  pageIndex: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService,
    private modalService: NzModalService,
    private patentFileService: PatentFileService
  ) {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('patentName', new FormControl(''));
    this.searchForm.addControl('patentCode', new FormControl(''));
    this.searchForm.addControl('fileName', new FormControl(''));
    this.searchForm.addControl('fileType', new FormControl('0'));
    this.searchForm.addControl('uploaderName', new FormControl(''));
    this.searchForm.addControl('dateRange', new FormControl(''));
  }

  ngOnInit(): void {
    this.search(true);
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset({
      patentName: '',
      patentCode: '',
      fileName: '',
      fileType: '',
      uploaderName: '',
      dateRange: ''
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

    this.patentFileService.getList(this.queryInfo.getRawValue()).subscribe((res: any) =>{
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

      if (key === 'patentName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'patentCode') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'patentCode',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'fileName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'fileName',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'fileType') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'fileType',
            this.searchForm.controls[key].value
          )
        );
      } else if (key === 'uploaderName') {
        queryCriteria.addCriteria(
          new QueryCriteriaInfo(
            'uploaderName',
            this.searchForm.controls[key].value
          )
        );
      }
      // else if (key === 'dateRange') {
      //   queryCriteria.addCriteria(
      //     new QueryCriteriaInfo(
      //       'dateRange',
      //       this.searchForm.controls[key].value
      //     )
      //   );
      // }
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
      nzTitle: '新增专利文件',
      nzContent: CreateComponent,
      nzClosable: true,
      nzMask: true,
      nzMaskClosable: false,
      nzWidth: 540,
      nzBodyStyle: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        'padding-bottom': '53px'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      // console.log('新增专利文件');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public download(id: string) {
  }
  
  public delete(id: string): void {
    this.modalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => this.patentFileService.deleteData(id).subscribe((res: any) =>{
        console.log('删除数据：', res);
      }),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消删除')
    });
  }

}
