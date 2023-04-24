import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareStatisticsRoutingModule } from './software-statistics-routing.module';
import { SoftwareStatisticsComponent } from './software-statistics.component';


@NgModule({
  declarations: [
    SoftwareStatisticsComponent
  ],
  imports: [
    CommonModule,
    SoftwareStatisticsRoutingModule
  ]
})
export class SoftwareStatisticsModule { }
