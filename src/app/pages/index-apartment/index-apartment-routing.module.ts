import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexApartmentComponent } from './index-apartment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexApartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexApartmentRoutingModule { }
