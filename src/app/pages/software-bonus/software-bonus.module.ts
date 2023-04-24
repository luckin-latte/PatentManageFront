import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareBonusRoutingModule } from './software-bonus-routing.module';
import { SoftwareBonusComponent } from './software-bonus.component';


@NgModule({
  declarations: [
    SoftwareBonusComponent
  ],
  imports: [
    CommonModule,
    SoftwareBonusRoutingModule
  ]
})
export class SoftwareBonusModule { }
