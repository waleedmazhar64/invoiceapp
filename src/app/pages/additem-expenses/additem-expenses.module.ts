import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdditemExpensesPage } from './additem-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: AdditemExpensesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdditemExpensesPage]
})
export class AdditemExpensesPageModule {}
