import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

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

  cancel() {
    this.drawerRef.close(false);
  }

  save() {
    this.drawerRef.close(false);
  }

}
