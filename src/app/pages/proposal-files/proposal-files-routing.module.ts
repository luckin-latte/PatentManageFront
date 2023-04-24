import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalFilesComponent } from './proposal-files.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProposalFilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalFilesRoutingModule { }
