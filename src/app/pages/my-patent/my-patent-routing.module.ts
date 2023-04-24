import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPatentComponent } from './my-patent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyPatentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPatentRoutingModule { }
