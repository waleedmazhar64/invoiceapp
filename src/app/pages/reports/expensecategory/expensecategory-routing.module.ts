import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensecategoryPage } from './expensecategory.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensecategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensecategoryPageRoutingModule {}
