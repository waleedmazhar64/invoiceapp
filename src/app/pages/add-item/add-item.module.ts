import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddItemPage } from './add-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemPage,
    children: [
      { path: 'additem-items', loadChildren: '../additem-items/additem-items.module#AdditemItemsPageModule' },
      { path: 'additem-time', loadChildren: '../additem-time/additem-time.module#AdditemTimePageModule' },
      { path: 'additem-expenses', loadChildren: '../additem-expenses/additem-expenses.module#AdditemExpensesPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddItemPage]
})
export class AddItemPageModule {}
