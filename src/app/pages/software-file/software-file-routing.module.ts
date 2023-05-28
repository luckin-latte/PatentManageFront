import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareFileComponent } from './software-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwareFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareFileRoutingModule { }
