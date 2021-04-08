import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { IonicModule } from '@ionic/angular';

import { InvoiceInfoPage } from './invoice-info.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceInfoPage
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
    DatePicker,
    DatePipe
  ],
  declarations: [InvoiceInfoPage]
})
export class InvoiceInfoPageModule {}
