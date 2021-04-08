import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicModule } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { LedgerPageRoutingModule } from './ledger-routing.module';

import { LedgerPage } from './ledger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LedgerPageRoutingModule
  ],
  providers: [
    CallNumber,
    DatePipe,
    SocialSharing,
    File,
    FileOpener
  ],
  declarations: [LedgerPage]
})
export class LedgerPageModule {}
