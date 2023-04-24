import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalStatisticsRoutingModule } from './proposal-statistics-routing.module';
import { ProposalStatisticsComponent } from './proposal-statistics.component';


@NgModule({
  declarations: [
    ProposalStatisticsComponent
  ],
  imports: [
    CommonModule,
    ProposalStatisticsRoutingModule
  ]
})
export class ProposalStatisticsModule { }
