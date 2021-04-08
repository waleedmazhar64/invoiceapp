import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { IonicModule } from '@ionic/angular';

import { ExpensejournalPageRoutingModule } from './expensejournal-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ExpensejournalPage } from './expensejournal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensejournalPageRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    FileOpener,
    SocialSharing,
    DatePipe,
    DatePicker,
    File
  ],
  declarations: [ExpensejournalPage]
})
export class ExpensejournalPageModule {}
