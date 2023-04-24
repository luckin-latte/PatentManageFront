import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarkStatisticsRoutingModule } from './trademark-statistics-routing.module';
import { TrademarkStatisticsComponent } from './trademark-statistics.component';


@NgModule({
  declarations: [
    TrademarkStatisticsComponent
  ],
  imports: [
    CommonModule,
    TrademarkStatisticsRoutingModule
  ]
})
export class TrademarkStatisticsModule { }
