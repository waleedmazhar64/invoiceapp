import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrashInvoicesPage } from './trash-invoices.page';

const routes: Routes = [
  {
    path: '',
    component: TrashInvoicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashInvoicesPageRoutingModule {}
