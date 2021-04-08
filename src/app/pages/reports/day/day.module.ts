import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { DatePipe } from '@angular/common';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { IonicModule } from '@ionic/angular';

import { DayPageRoutingModule } from './day-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DayPage } from './day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    FileOpener,
    SocialSharing,
    DatePipe,
    DatePicker,
    File
  ],
  declarations: [DayPage]
})
export class DayPageModule {}
