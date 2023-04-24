import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovalComponent implements OnInit {

  @Input() name!: string;
  InfoForm: FormGroup;
  ApprovalForm!: FormGroup;

  constructor(
    private nzDrawerRef: NzDrawerRef,
    private formBuilder: FormBuilder
    ) {
      this.InfoForm = this.formBuilder.group({
        
      });
      this.ApprovalForm = this.formBuilder.group({

      })
  }

  ngOnInit(): void {
  }

  submit() {
    this.nzDrawerRef.close(this.InfoForm.getRawValue());
  }
  
}
