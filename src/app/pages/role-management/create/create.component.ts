import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { RoleManagementService } from '../role-management.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  CreateForm: FormGroup;
  drawerRef!: NzDrawerRef;

  // 下拉搜索框数据
  listOfPermission: Array<{ value: string; text: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
    private roleManagementService: RoleManagementService
    ) {
      this.CreateForm = this.formBuilder.group({
        roleName: ['', [Validators.required]],
        roleCode: ['', [Validators.required]],
        permission: [[], [Validators.required]]
      });
  }

  ngOnInit(): void {
    this.libService.getCode('R').subscribe((res: any) =>{
      console.log('角色号：', res.data);
      this.CreateForm.get('roleCode')?.setValue(res.data);
    })
    // this.searchPermission(`$event`);
  }

  searchPermission(e: string): void {
    this.libService.getAllPermission().subscribe((res: any) => {
      console.log(res.data.permissionList)
      res.data.permissionList.forEach((item: string) => {
        this.listOfPermission.push({
          value: item,
          text: item
        });
      });
    });
  }

  cancel() {
  }

  save() {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.CreateForm.value)

    this.roleManagementService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
  }
}
