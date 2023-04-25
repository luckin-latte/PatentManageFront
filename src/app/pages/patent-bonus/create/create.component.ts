import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

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
    private formBuilder: FormBuilder
    ) {
      this.CreateForm = this.formBuilder.group({
        patentCode: ['ZL557'],
        patentType: ['0'],
        bonusType: ['0'],
        status: ['0'],
        totalBonus: [10000],
        listOfInventor: this.formBuilder.array([
          this.formBuilder.group({
            inventorName: ['发明人1'],
            actualPay: [100],
          })
        ])
      });
  }

  ngOnInit(): void {
  }

  public cancel() {
  }

  public save() {
    this.drawerRef.close(this.CreateForm.getRawValue());
  }

  
  get listOfInventor(): FormArray {
    return this.CreateForm.get('listOfInventor') as FormArray;
  }

  public addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.listOfInventor.push(
      this.formBuilder.group({
        inventorName: [''],
        actualPay: [100],
      })
    );
  }

  public removeField(i: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfInventor.length > 1) {
      this.listOfInventor.removeAt(i);
    }
  }

}
