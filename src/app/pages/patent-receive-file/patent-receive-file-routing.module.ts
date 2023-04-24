import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentReceiveFileComponent } from './patent-receive-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentReceiveFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentReceiveFileRoutingModule { }
