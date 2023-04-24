import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BonusComponent implements OnInit {
  dataSet = [
    {
      number: '1',
      proposalName: '检索系统'
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

  preview (): void {

  }

  download (): void {

  }
  
}
