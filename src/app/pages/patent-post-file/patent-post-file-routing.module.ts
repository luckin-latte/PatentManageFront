import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatentPostFileComponent } from './patent-post-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatentPostFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentPostFileRoutingModule { }
