import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Location } from '@angular/common';
import { Contacts } from '@ionic-native/contacts';



import { IonicModule } from '@ionic/angular';

import { MenuAddclientPage } from './menu-addclient.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAddclientPage
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
    Location,
    Contacts
  ],
  declarations: [MenuAddclientPage]
})
export class MenuAddclientPageModule {}
