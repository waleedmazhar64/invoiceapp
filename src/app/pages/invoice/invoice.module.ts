import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicModule } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { InvoicePage } from './invoice.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicePage
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
    DatePipe,
    Network,
    SocialSharing,
    File,
    HTTP,
    FileOpener
  ],
  declarations: [InvoicePage]
})
export class InvoicePageModule {}
