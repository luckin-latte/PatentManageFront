import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyStatisticsRoutingModule } from './property-statistics-routing.module';
import { PropertyStatisticsComponent } from './property-statistics.component';


@NgModule({
  declarations: [
    PropertyStatisticsComponent
  ],
  imports: [
    CommonModule,
    PropertyStatisticsRoutingModule
  ]
})
export class PropertyStatisticsModule { }
