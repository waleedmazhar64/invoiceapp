import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule } from '@ionic/angular';

import { TrashPurchasedOrdersPage } from './trash-purchased-orders.page';

const routes: Routes = [
  {
    path: '',
    component: TrashPurchasedOrdersPage
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
    FileOpener,
    DatePipe,
    Network,
    SocialSharing,
    File,
    HTTP,
    CallNumber
  ],
  declarations: [TrashPurchasedOrdersPage]
})
export class TrashPurchasedOrdersPageModule {}
