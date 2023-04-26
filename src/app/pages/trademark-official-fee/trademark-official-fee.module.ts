import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarkOfficialFeeRoutingModule } from './trademark-official-fee-routing.module';
import { TrademarkOfficialFeeComponent } from './trademark-official-fee.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    TrademarkOfficialFeeComponent,
    DetailComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TrademarkOfficialFeeRoutingModule
  ]
})
export class TrademarkOfficialFeeModule { }
