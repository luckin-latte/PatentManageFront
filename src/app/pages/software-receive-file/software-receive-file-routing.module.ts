import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareReceiveFileComponent } from './software-receive-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SoftwareReceiveFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareReceiveFileRoutingModule { }
