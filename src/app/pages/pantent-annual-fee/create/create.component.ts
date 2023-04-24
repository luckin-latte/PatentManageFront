import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  pantentAnnualFeeSet = [
    {
      number: '1',
      code: 'ZL1234',
      name: '检索系统',
      type: '发明专利'
    }
  ];

  @Input() name!: string;
  searchForm!: FormGroup;
  drawerRef!: NzDrawerRef;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
