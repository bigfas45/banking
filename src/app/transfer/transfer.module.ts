import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferHomeComponent } from './transfer-home/transfer-home.component';
import { TransferBeneficiariesComponent } from './transfer-beneficiaries/transfer-beneficiaries.component';
import { TransferSelfComponent } from './transfer-self/transfer-self.component';
import { TransferOtherBanksComponent } from './transfer-other-banks/transfer-other-banks.component';
import { TransferEaseAccountComponent } from './transfer-ease-account/transfer-ease-account.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';


@NgModule({
  declarations: [
    TransferHomeComponent,
    TransferBeneficiariesComponent,
    TransferSelfComponent,
    TransferOtherBanksComponent,
    TransferEaseAccountComponent,
    TransferHistoryComponent,
    
  ],
  imports: [
    CommonModule,
    TransferRoutingModule
  ],
  exports: [],
})
export class TransferModule { }
