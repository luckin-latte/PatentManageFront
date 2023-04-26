import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareBonusRoutingModule } from './software-bonus-routing.module';
import { SoftwareBonusComponent } from './software-bonus.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    SoftwareBonusComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SoftwareBonusRoutingModule
  ]
})
export class SoftwareBonusModule { }
