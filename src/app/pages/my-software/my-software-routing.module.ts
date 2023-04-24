import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MySoftwareComponent } from './my-software.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MySoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySoftwareRoutingModule { }
