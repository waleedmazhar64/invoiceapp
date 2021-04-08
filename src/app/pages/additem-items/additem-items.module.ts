import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';


import { IonicModule } from '@ionic/angular';

import { AdditemItemsPage } from './additem-items.page';

const routes: Routes = [
  {
    path: '',
    component: AdditemItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
   HTTP
  ],
  declarations: [AdditemItemsPage]
})
export class AdditemItemsPageModule {}
