import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IonicModule } from '@ionic/angular';

import { MonthPageRoutingModule } from './month-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { MonthPage } from './month.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthPageRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    FileOpener,
    SocialSharing,
    DatePipe,
    File
  ],
  declarations: [MonthPage]
})
export class MonthPageModule {}
