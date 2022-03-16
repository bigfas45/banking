import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { TransferModule } from './transfer/transfer.module';
import { InternationalTransfersModule } from './international-transfers/international-transfers.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    TransferModule,
    InternationalTransfersModule,
    BeneficiariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
