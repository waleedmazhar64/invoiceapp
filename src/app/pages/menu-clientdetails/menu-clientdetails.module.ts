import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { MenuClientdetailsPage } from './menu-clientdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MenuClientdetailsPage
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
    DatePipe,
    Network,
    HTTP,
  ],
  declarations: [MenuClientdetailsPage]
})
export class MenuClientdetailsPageModule {}
