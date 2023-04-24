import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareOfficialFeeRoutingModule } from './software-official-fee-routing.module';
import { SoftwareOfficialFeeComponent } from './software-official-fee.component';

@NgModule({
  declarations: [
    SoftwareOfficialFeeComponent
  ],
  imports: [
    CommonModule,
    SoftwareOfficialFeeRoutingModule
  ]
})
export class SoftwareOfficialFeeModule { }
