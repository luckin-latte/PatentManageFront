import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentBonusRoutingModule } from './patent-bonus-routing.module';
import { PatentBonusComponent } from './patent-bonus.component';


@NgModule({
  declarations: [
    PatentBonusComponent
  ],
  imports: [
    CommonModule,
    PatentBonusRoutingModule
  ]
})
export class PatentBonusModule { }
