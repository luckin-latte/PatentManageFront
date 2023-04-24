import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusStatisticsRoutingModule } from './bonus-statistics-routing.module';
import { BonusStatisticsComponent } from './bonus-statistics.component';


@NgModule({
  declarations: [
    BonusStatisticsComponent
  ],
  imports: [
    CommonModule,
    BonusStatisticsRoutingModule
  ]
})
export class BonusStatisticsModule { }
