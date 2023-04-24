import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyTrademarkAddComponent } from './my-trademark-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTrademarkAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrademarkAddRoutingModule { }
