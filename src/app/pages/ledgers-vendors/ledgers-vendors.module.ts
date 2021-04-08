import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { IonicModule } from '@ionic/angular';

import { LedgersVendorsPageRoutingModule } from './ledgers-vendors-routing.module';

import { LedgersVendorsPage } from './ledgers-vendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LedgersVendorsPageRoutingModule
  ],
  providers: [
    CallNumber,
    DatePipe,
    SocialSharing,
    File,
    FileOpener
  ],
  declarations: [LedgersVendorsPage]
})
export class LedgersVendorsPageModule {}
