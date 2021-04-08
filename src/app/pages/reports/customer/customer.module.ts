import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';


import { CustomerPageRoutingModule } from './customer-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CustomerPage } from './customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPageRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    FileOpener,
    SocialSharing,
    DatePipe,
    DatePicker,
    File
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
