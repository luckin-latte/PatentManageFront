import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
