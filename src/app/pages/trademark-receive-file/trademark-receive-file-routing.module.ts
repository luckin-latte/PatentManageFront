import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkReceiveFileComponent } from './trademark-receive-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkReceiveFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkReceiveFileRoutingModule { }
