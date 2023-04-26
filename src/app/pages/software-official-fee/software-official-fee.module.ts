import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareOfficialFeeRoutingModule } from './software-official-fee-routing.module';
import { SoftwareOfficialFeeComponent } from './software-official-fee.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    SoftwareOfficialFeeComponent,
    CreateComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SoftwareOfficialFeeRoutingModule
  ]
})
export class SoftwareOfficialFeeModule { }
