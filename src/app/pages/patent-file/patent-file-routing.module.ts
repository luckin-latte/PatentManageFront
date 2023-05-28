import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentFileComponent } from './patent-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentFileRoutingModule { }
