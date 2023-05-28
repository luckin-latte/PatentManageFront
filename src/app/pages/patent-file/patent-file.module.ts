import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentFileRoutingModule } from './patent-file-routing.module';
import { PatentFileComponent } from './patent-file.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    PatentFileComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PatentFileRoutingModule
  ]
})
export class PatentFileModule { }
