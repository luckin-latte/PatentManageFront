import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrademarkBonusRoutingModule } from './trademark-bonus-routing.module';
import { TrademarkBonusComponent } from './trademark-bonus.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    TrademarkBonusComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TrademarkBonusRoutingModule
  ]
})
export class TrademarkBonusModule { }
