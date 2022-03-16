import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesHomeComponent } from './beneficiaries-home/beneficiaries-home.component';

const routes: Routes = [
  {path: '', component: BeneficiariesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiariesRoutingModule { }
