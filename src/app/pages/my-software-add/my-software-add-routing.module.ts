import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MySoftwareAddComponent } from './my-software-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MySoftwareAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySoftwareAddRoutingModule { }
