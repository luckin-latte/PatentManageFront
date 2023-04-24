import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProposalComponent } from './my-proposal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProposalRoutingModule { }
