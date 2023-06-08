import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { ProposalReviewService } from '../proposal-review.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovalComponent implements OnInit {

  @Input() proposalCode!: string;
  @Input() proposalInfo!: object;
  InfoForm: FormGroup;
  ApprovalForm!: FormGroup;

  constructor(
    private drawerRef: NzDrawerRef,
    private formBuilder: FormBuilder,
    private proposalReviewService: ProposalReviewService
    ) {
      this.InfoForm = this.formBuilder.group({
        proposalCode: [''],
        proposalName: [''],
        proposerName: [''],
        proposalDate: [''],
        proposalType: [''],
        detailText: ['']
      });
      this.ApprovalForm = this.formBuilder.group({
        proposalCode: [''],
        suggestion: [''],
        result: ['']
      })
  }

  ngOnInit(): void {
    // this.agencyService.getAgency(this.agencyInfo).subscribe((res: any) =>{
    //   console.log('返回数据：', res);
      console.log('this.proposalInfo', this.proposalInfo)
      this.InfoForm.patchValue(this.proposalInfo)

      this.ApprovalForm.get('proposalCode')?.setValue(this.proposalCode);
    // })
  }

  public cancel() {
    this.drawerRef.close(false);
  }

  public submit() {
    Object.keys(this.ApprovalForm.controls).forEach(key => {
      this.ApprovalForm.controls[key].markAsDirty();
      this.ApprovalForm.controls[key].updateValueAndValidity();
    })
    console.log('新增数据：', this.ApprovalForm.value)

    this.proposalReviewService.newData(this.ApprovalForm.value).subscribe((res: any) =>{
      console.log('res.data: ', res);
    })
    this.drawerRef.close(true);
  }
  
}
