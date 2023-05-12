import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { FileComponent } from './file/file.component';


@Component({
  selector: 'app-proposal-files',
  templateUrl: './proposal-files.component.html',
  styleUrls: ['./proposal-files.component.css']
})
export class ProposalFilesComponent implements OnInit {

  myproposalSet = [
    {
      number: '1',
      code: '	TA23051207',
      name: '企业知识产权管理系统',
      proposer: '小张',
      status: '通过',
      date: '2023-05-12'
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  proposalDateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      proposalCode: ['proposalCode'],
      proposalName: ['proposalName'],
      uploader: ['uploader'],
      status: ['0'],
      proposalDateRange: [[]],
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
