import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPropertyComponent } from './new-property.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewPropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPropertyRoutingModule { }
