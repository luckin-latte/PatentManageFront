import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentBonusComponent } from './patent-bonus.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentBonusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentBonusRoutingModule { }
