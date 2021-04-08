import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgersVendorsPage } from './ledgers-vendors.page';

const routes: Routes = [
  {
    path: '',
    component: LedgersVendorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgersVendorsPageRoutingModule {}
