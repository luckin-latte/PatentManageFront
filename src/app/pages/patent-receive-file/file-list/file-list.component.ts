import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit {

  dataSet: any;

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
