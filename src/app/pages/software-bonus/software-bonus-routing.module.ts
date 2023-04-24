import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareBonusComponent } from './software-bonus.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwareBonusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareBonusRoutingModule { }
