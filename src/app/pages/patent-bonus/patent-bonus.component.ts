import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-patent-bonus',
  templateUrl: './patent-bonus.component.html',
  styleUrls: ['./patent-bonus.component.css']
})
export class PatentBonusComponent implements OnInit {

  pantentBonusSet = [
    {
      number: '1',
      code: 'ZL19502',
      patentType: '发明型',
      bonusType: '授权',
      bonus: '1000',
      status: '已发放',
      actualPay: '1000',
      inventor: '小王',
      rank: '1'
    },{
      number: '2',
      code: 'ZL19502',
      patentType: '发明型',
      bonusType: '授权',
      bonus: '600',
      status: '已发放',
      actualPay: '600',
      inventor: '小明',
      rank: '2'
    }
  ];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: NzDrawerService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      patentCode: ['ZL46646'],
      patentName: ['检索系统'],
      patentType: ['0'],
      inventorName: ['发明人1'],
      inventorCode: ['A575'],
      department: ['开发1部'],
      bonusType: ['0'],
      status: ['0']
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

  public showCreate() {
    this.drawerRef = this.drawerService.create({
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

  public showEdit() {
    this.drawerRef = this.drawerService.create({
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

  public showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: '确定删除吗？',
      nzOkText: '删除',
      // nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
