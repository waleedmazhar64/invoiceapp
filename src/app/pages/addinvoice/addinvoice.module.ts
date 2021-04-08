import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Network } from '@ionic-native/network/ngx';


import { IonicModule } from '@ionic/angular';

import { AddinvoicePage } from './addinvoice.page';

const routes: Routes = [
  {
    path: '',
    component: AddinvoicePage
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
    FilePath,
    File,
    WebView,
    Camera,
    HTTP,
    DatePicker,
    Network

  ],
  declarations: [AddinvoicePage]
  
})
export class AddinvoicePageModule {}
