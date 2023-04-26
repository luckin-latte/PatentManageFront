import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { CreateComponent } from './create/create.component';

interface ItemData {
  number: string;
  roleName: string;
  auth: string;
}

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleManagementComponent implements OnInit {
  
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
      roleName: ['管理员'],
    });
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push({
        number: `${i}`,
        roleName: `角色 ${i}`,
        auth: `2023010 ${i}`
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
      nzTitle: '新增角色',
      nzContent: CreateComponent,
      nzContentParams: {
        name: '新增角色'
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
      console.log('新增角色');
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
