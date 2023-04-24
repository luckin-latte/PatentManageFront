import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipatedProposalComponent } from './participated-proposal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParticipatedProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipatedProposalRoutingModule { }
