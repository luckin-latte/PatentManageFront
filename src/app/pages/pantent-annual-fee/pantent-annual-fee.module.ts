import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantentAnnualFeeRoutingModule } from './pantent-annual-fee-routing.module';
import { PantentAnnualFeeComponent } from './pantent-annual-fee.component';

@NgModule({
  declarations: [
    PantentAnnualFeeComponent
  ],
  imports: [
    CommonModule,
    PantentAnnualFeeRoutingModule
  ]
})
export class PantentAnnualFeeModule { }
