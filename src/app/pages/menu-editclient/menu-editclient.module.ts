import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx'
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

import { IonicModule } from '@ionic/angular';

import { MenuEditclientPage } from './menu-editclient.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEditclientPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DatePipe,
    Network,
    HTTP,
    Contacts
  ],
  declarations: [MenuEditclientPage]
})
export class MenuEditclientPageModule {}
