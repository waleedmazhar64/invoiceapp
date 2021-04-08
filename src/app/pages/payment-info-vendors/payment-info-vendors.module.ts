import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { IonicModule } from '@ionic/angular';

import { PaymentInfoVendorsPageRoutingModule } from './payment-info-vendors-routing.module';

import { PaymentInfoVendorsPage } from './payment-info-vendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentInfoVendorsPageRoutingModule
  ],
  providers: [
    Network,
    HTTP,
    DatePipe,
    DatePicker
  ],
  declarations: [PaymentInfoVendorsPage]
})
export class PaymentInfoVendorsPageModule {}
