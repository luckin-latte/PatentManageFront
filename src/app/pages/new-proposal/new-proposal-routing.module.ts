import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProposalComponent } from './new-proposal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProposalRoutingModule { }
