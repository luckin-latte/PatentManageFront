import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareFileRoutingModule } from './software-file-routing.module';
import { SoftwareFileComponent } from './software-file.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    SoftwareFileComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SoftwareFileRoutingModule
  ]
})
export class SoftwareFileModule { }
