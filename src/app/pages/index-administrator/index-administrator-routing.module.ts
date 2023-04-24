import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexAdministratorComponent } from './index-administrator.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexAdministratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexAdministratorRoutingModule { }
