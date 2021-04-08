import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrashCreditMemosPage } from './trash-credit-memos.page';

const routes: Routes = [
  {
    path: '',
    component: TrashCreditMemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrashCreditMemosPage]
})
export class TrashCreditMemosPageModule {}
