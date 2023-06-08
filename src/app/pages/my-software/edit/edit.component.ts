import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  @Input() name!: string;
  EditForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    ) {
      this.EditForm = this.formBuilder.group({
        softwareCode: ['RZ1234'],
        softwareName: ['软件著作'],
        inventorName: ['发明人'],
        agency: ['0'],
        version: ['1.0.0'],
        devWay: ['开发方式'],
        registerCode: ['DJ123456'],
        applyDate: [''],
        certiCode: ['ZS123456'],
        certiDate: [''],
        storeCode: ['FC123456'],
        storeDate: [''],
        powerStatus: ['0'],
        rightRange: ['权力范围'],
        proposalDate: ['0'],
        completeDate: ['0'],
        releaseDate: ['0']
      });
  }

  ngOnInit(): void {
  }

  public cancel(e: MouseEvent) {
    this.drawerRef.close(false);
  }

  public save(e: MouseEvent) {
    Object.keys(this.EditForm.controls).forEach(key => {
      this.EditForm.controls[key].markAsDirty();
      this.EditForm.controls[key].updateValueAndValidity();
    })
    // console.log('修改结果：', this.EditForm.getRawValue());
    // this.agencyService.updateData(this.EditForm.value).subscribe((res: any) =>{
    //   // console.log('res.data: ', res);
    //   const msg = res.message;
    //     if (res.code === '200') {
    //       this.nzMessageService.success('编辑成功！');
    //       this.drawerRef.close(true);
    //     } else {
    //       if (msg) {
    //         this.nzMessageService.error(msg);
    //       } else {
    //         this.nzMessageService.error('编辑失败！');
    //       }
    //     }
    // })
  }

}
