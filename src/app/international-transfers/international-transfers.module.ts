import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternationalTransfersRoutingModule } from './international-transfers-routing.module';
import { InternationalTransfersHomeComponent } from './international-transfers-home/international-transfers-home.component';


@NgModule({
  declarations: [
    InternationalTransfersHomeComponent
  ],
  imports: [
    CommonModule,
    InternationalTransfersRoutingModule
  ],
  exports: [InternationalTransfersHomeComponent]
})
export class InternationalTransfersModule { }
