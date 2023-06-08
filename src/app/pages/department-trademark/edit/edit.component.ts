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

  @Input() trademarkInfo!: object;
  EditForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private drawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    ) {
      this.EditForm = this.formBuilder.group({
        trademarkCode: ['trademarkCode'],
        trademarkName: ['trademarkName'],
        inventorName: ['inventorName'],
        owner: ['owner'],
        trademarkType: ['0409'],
        copyrightNo: ['1245643'],
        status: ['0'],
        powerStatus: ['0'],
        agency: ['0']
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
