import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrademarkPostFileComponent } from './trademark-post-file.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TrademarkPostFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrademarkPostFileRoutingModule { }
