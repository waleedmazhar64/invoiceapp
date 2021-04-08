import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DefaultcommentPage } from './defaultcomment.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultcommentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DefaultcommentPage]
})
export class DefaultcommentPageModule {}
