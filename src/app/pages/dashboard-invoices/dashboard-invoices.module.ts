import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { HTTP } from '@ionic-native/http/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


import { DashboardInvoicesPage } from './dashboard-invoices.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardInvoicesPage
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
    Network,
    SocialSharing,
    File,
    DatePipe,
    HTTP,
    FileOpener
  ],
  declarations: [DashboardInvoicesPage]
})
export class DashboardInvoicesPageModule {}
