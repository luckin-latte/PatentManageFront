import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexProposalComponent } from './index-proposal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexProposalRoutingModule { }
