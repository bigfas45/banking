import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariesRoutingModule } from './beneficiaries-routing.module';
import { BeneficiariesHomeComponent } from './beneficiaries-home/beneficiaries-home.component';


@NgModule({
  declarations: [
    BeneficiariesHomeComponent
  ],
  imports: [
    CommonModule,
    BeneficiariesRoutingModule
  ],
  exports: [BeneficiariesHomeComponent]
})
export class BeneficiariesModule { }
