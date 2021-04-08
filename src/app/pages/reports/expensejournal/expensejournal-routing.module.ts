import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensejournalPage } from './expensejournal.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensejournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensejournalPageRoutingModule {}
