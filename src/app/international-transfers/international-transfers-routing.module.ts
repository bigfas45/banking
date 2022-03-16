import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternationalTransfersHomeComponent } from './international-transfers-home/international-transfers-home.component';

const routes: Routes = [
  {path: '', component: InternationalTransfersHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternationalTransfersRoutingModule { }
