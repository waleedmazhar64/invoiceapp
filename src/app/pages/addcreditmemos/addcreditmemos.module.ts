import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddcreditmemosPage } from './addcreditmemos.page';

const routes: Routes = [
  {
    path: '',
    component: AddcreditmemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddcreditmemosPage]
})
export class AddcreditmemosPageModule {}
