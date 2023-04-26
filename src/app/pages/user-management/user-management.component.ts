import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { CreateComponent } from './create/create.component';

interface ItemData {
  number: string;
  userName: string;
  userCode: string;
  tel: string;
  role: string;
  password: string
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {
  
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  dateRange = [];

  constructor(
    private formBuilder: FormBuilder,
    private nzDrawerService: NzDrawerService
    ) {

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      userName: ['管理员'],
    });
    const data = [];
    for (let i = 0; i < 17; i++) {
      data.push({
        number: `${i}`,
        userName: `用户 ${i}`,
        userCode: `2023010 ${i}`,
        tel: `Tel ${i}`,
        role: `角色 ${i}`,
        password: `密码 ${i}`,
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }

  public onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  public resetForm(): void {
    this.searchForm.reset();
  }

  public create() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: '新增用户',
      nzContent: CreateComponent,
      nzContentParams: {
        name: '新增用户'
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
      console.log('新增用户');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  public startEdit(number: string): void {
    this.editCache[number].edit = true;
  }

  public cancelEdit(number: string): void {
    const index = this.listOfData.findIndex(item => item.number === number);
    this.editCache[number] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  public saveEdit(number: string): void {
    const index = this.listOfData.findIndex(item => item.number === number);
    Object.assign(this.listOfData[index], this.editCache[number].data);
    this.editCache[number].edit = false;
  }

  public updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.number] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  public deleteRow(number: string): void {
    this.listOfData = this.listOfData.filter(d => d.number !== number);
  }

}
