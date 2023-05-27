import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { LibService } from 'src/app/shared';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  @Input() name!: string;
  CreateForm: FormGroup;
  drawerRef!: NzDrawerRef;

  constructor(
    private formBuilder: FormBuilder,
    private libService: LibService,
    private agencyService: AgencyService
    ) {
      this.CreateForm = this.formBuilder.group({
        agencyName: [null, [Validators.required]],
        agencyCode: [null, [Validators.required]],
        agentName: [null],
        agencyHolder: [null],
        agencyPhone: [null],
        agencyEmail: [null, [Validators.email]],
        agencyAddress: [null],
        agencyRemark: [null]
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
      console.log('res.data: ', res.data);
      this.CreateForm.get('agencyCode')?.setValue(res.data);
    })

    // this.CreateForm.get('agencyName')?.setValidators([Validators.required])
    // this.CreateForm.get('agencyCode')?.setValidators([Validators.required])
    // this.CreateForm.get('agencyEmail')?.setValidators([Validators.email])
    // this.CreateForm.get('agencyCode')?.disabled;
  }

  public cancel() {
  }

  public save(): void {
    Object.keys(this.CreateForm.controls).forEach(key => {
      this.CreateForm.controls[key].markAsDirty();
      this.CreateForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.CreateForm.value)

    this.agencyService.newData(this.CreateForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res.data);
    })
  }

}
