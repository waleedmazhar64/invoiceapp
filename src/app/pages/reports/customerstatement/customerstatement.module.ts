import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { IonicModule } from '@ionic/angular';

import { CustomerstatementPageRoutingModule } from './customerstatement-routing.module';

import { CustomerstatementPage } from './customerstatement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerstatementPageRoutingModule
  ],
  providers: [
    FileOpener,
    SocialSharing,
    DatePipe,
    File,
    DatePicker
  ],
  declarations: [CustomerstatementPage]
})
export class CustomerstatementPageModule {}
