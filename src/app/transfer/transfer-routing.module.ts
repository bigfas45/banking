import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferHomeComponent } from './transfer-home/transfer-home.component';
import { TransferBeneficiariesComponent } from './transfer-beneficiaries/transfer-beneficiaries.component';
import { TransferEaseAccountComponent } from './transfer-ease-account/transfer-ease-account.component';
import { TransferOtherBanksComponent } from './transfer-other-banks/transfer-other-banks.component';
import { TransferSelfComponent } from './transfer-self/transfer-self.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transfer',
    pathMatch: 'full'
  },
{
  path: 'transfer', component: TransferHomeComponent,
  children: [
    {path: '', component: TransferOtherBanksComponent},
    {path: 'ease-account', component: TransferEaseAccountComponent},
    {path: 'transfer-to-beneficiaries', component: TransferBeneficiariesComponent},
    {path: 'self', component: TransferSelfComponent},
    {path: 'history', component: TransferHistoryComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
