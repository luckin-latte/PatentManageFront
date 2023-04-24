import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {

  dataSet = [
    {
      number: '1',
      approver: '审批人',
      process: '主管',
      date: '2023-03-09',
      result: '通过'
    }
  ];

  @Input() name!: string;
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: [ null ],
      description: [ null ],
      deadline: [ new Date() ]
    });
  }

  ngOnInit() {
  }

}
