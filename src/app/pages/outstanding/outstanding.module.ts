import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { IonicModule } from '@ionic/angular';

import { OutstandingPageRoutingModule } from './outstanding-routing.module';

import { OutstandingPage } from './outstanding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutstandingPageRoutingModule
  ],
  providers: [
    HTTP,
    DatePipe,
    Network,
    SocialSharing,
    File,
    FileOpener
  ],
  declarations: [OutstandingPage]
})
export class OutstandingPageModule {}
