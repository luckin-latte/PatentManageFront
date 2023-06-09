import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LibService } from 'src/app/shared';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  CreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private libService: LibService,
    private agencyService: AgencyService
    ) {
      this.CreateForm = this.formBuilder.group({
        agencyName: ['', [Validators.required]],
        agencyCode: ['', [Validators.required]],
        agencyHolder: [''],
        agencyPhone: [''],
        agencyEmail: ['', [Validators.email]],
        agencyAddress: [''],
        agencyRemark: ['']
      });

      // this.CreateForm.addControl('agencyName', new FormControl('', [Validators.required]));
      // this.CreateForm.addControl('agencyCode', new FormControl('', [Validators.required]));
      // this.CreateForm.addControl('agentName', new FormControl(''));
      // this.CreateForm.addControl('agencyHolder', new FormControl(''));
      // this.CreateForm.addControl('agencyPhone', new FormControl(''));
      // this.CreateForm.addControl('agencyEmail', new FormControl('', [Validators.email]));
      // this.CreateForm.addControl('agencyAddress', new FormControl(''));
      // this.CreateForm.addControl('agencyRemark', new FormControl(''));
  }

  ngOnInit(): void {
    this.libService.getCode('DL').subscribe((res: any) =>{
      // console.log('代理机构编号：', res.data);
      this.CreateForm.get('agencyCode')?.setValue(res.data);
      // this.CreateForm.get('agencyCode')?.disable();
    })

    // this.CreateForm.get('agencyName')?.setValidators([Validators.required])
    // this.CreateForm.get('agencyCode')?.setValidators([Validators.required])
    // this.CreateForm.get('agencyEmail')?.setValidators([Validators.email])
    // this.CreateForm.get('agencyCode')?.disabled;
  }

  public cancel(e: MouseEvent): void {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent): void {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    // console.log('新增代理机构：', this.CreateForm.value)
    
    this.agencyService.newData(this.CreateForm.value).subscribe((res: any) =>{
      // console.log('res.data: ', res);
      const msg = res.message;
        if (res.code === '200') {
          this.nzMessageService.success('保存成功！');
          this.drawerRef.close(true);
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('保存失败！');
          }
        }
    })
  }
}
