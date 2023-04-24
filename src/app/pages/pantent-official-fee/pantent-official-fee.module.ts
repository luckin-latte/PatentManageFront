import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantentOfficialFeeRoutingModule } from './pantent-official-fee-routing.module';
import { PantentOfficialFeeComponent } from './pantent-official-fee.component';

@NgModule({
  declarations: [
    PantentOfficialFeeComponent
  ],
  imports: [
    CommonModule,
    PantentOfficialFeeRoutingModule
  ]
})
export class PantentOfficialFeeModule { }
