import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarkOfficialFeeRoutingModule } from './trademark-official-fee-routing.module';
import { TrademarkOfficialFeeComponent } from './trademark-official-fee.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    TrademarkOfficialFeeComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    TrademarkOfficialFeeRoutingModule
  ]
})
export class TrademarkOfficialFeeModule { }
