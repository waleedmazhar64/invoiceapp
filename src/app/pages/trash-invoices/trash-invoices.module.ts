import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';


import { IonicModule } from '@ionic/angular';

import { TrashInvoicesPageRoutingModule } from './trash-invoices-routing.module';

import { TrashInvoicesPage } from './trash-invoices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashInvoicesPageRoutingModule
  ],
  providers: [
    FileOpener,
    DatePipe,
    Network,
    SocialSharing,
    File,
    HTTP
  ],
  declarations: [TrashInvoicesPage]
})
export class TrashInvoicesPageModule {}
