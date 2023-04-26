import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPropertyRoutingModule } from './new-property-routing.module';
import { NewPropertyComponent } from './new-property.component';


@NgModule({
  declarations: [
    NewPropertyComponent
  ],
  imports: [
    CommonModule,
    NewPropertyRoutingModule
  ]
})
export class NewPropertyModule { }
