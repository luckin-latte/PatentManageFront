import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalReviewComponent } from './proposal-review.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProposalReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalReviewRoutingModule { }
