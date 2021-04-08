import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DatePipe } from '@angular/common';
import { HTTP } from '@ionic-native/http/ngx';

import { IonicModule } from '@ionic/angular';

import { PurchasedOrdersPage } from './purchased-orders.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasedOrdersPage
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
    SocialSharing,
    FileOpener,
    File,
    Network,
    DatePipe,
    HTTP
  ],
  declarations: [PurchasedOrdersPage]
})
export class PurchasedOrdersPageModule {}
