import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPatentAddComponent } from './my-patent-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyPatentAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPatentAddRoutingModule { }
