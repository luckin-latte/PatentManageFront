import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkFileComponent } from './trademark-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkFileRoutingModule { }
