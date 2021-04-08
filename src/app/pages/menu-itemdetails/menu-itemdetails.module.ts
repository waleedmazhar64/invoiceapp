import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DatePipe } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MenuItemdetailsPage } from './menu-itemdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MenuItemdetailsPage
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
    HTTP,
    Network,
    DatePipe
  ],
  declarations: [MenuItemdetailsPage]
})
export class MenuItemdetailsPageModule {}
