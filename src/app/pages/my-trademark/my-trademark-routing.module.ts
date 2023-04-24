import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyTrademarkComponent } from './my-trademark.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTrademarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrademarkRoutingModule { }
