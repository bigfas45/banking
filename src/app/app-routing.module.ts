import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'transfers', loadChildren: () => import('./transfer/transfer.module').then((m) => m.TransferModule )},
  {path: 'internation-transfer', loadChildren: () => import('./international-transfers/international-transfers.module').then((m) => m.InternationalTransfersModule )},
  {path: 'beneficiaries', loadChildren: () => import('./beneficiaries/beneficiaries.module').then((m) => m.BeneficiariesModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
