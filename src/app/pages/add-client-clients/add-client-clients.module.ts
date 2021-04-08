import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { IonicModule } from '@ionic/angular';

import { AddClientClientsPage } from './add-client-clients.page';

const routes: Routes = [
  {
    path: '',
    component: AddClientClientsPage
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
   CallNumber,
   HTTP
  ],
  declarations: [AddClientClientsPage]
})
export class AddClientClientsPageModule {}
