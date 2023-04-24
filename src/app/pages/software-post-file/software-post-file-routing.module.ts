import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwarePostFileComponent } from './software-post-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwarePostFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwarePostFileRoutingModule { }
