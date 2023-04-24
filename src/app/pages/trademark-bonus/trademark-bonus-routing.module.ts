import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkBonusComponent } from './trademark-bonus.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkBonusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkBonusRoutingModule { }
