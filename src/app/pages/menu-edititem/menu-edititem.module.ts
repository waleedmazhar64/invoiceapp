import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DatePipe } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { MenuEdititemPage } from './menu-edititem.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEdititemPage
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
    Contacts,
    HTTP,
    Network,
    DatePipe
  ],
  declarations: [MenuEdititemPage]
})
export class MenuEdititemPageModule {}
