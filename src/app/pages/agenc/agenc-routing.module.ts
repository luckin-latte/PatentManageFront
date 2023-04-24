import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgencComponent } from './agenc.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AgencComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencRoutingModule { }
