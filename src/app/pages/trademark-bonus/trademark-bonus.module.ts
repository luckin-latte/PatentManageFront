import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarkBonusRoutingModule } from './trademark-bonus-routing.module';
import { TrademarkBonusComponent } from './trademark-bonus.component';


@NgModule({
  declarations: [
    TrademarkBonusComponent
  ],
  imports: [
    CommonModule,
    TrademarkBonusRoutingModule
  ]
})
export class TrademarkBonusModule { }
