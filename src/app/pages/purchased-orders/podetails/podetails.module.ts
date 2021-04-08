import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

import { IonicModule } from '@ionic/angular';

import { PodetailsPage } from './podetails.page';

const routes: Routes = [
  {
    path: '',
    component: PodetailsPage
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
    Network,
    Camera,
    CallNumber,
    SMS,
    SocialSharing,
    HTTP,
    DatePipe,
    FilePath,
    WebView,
    File,
  ],
  declarations: [PodetailsPage]
})
export class PodetailsPageModule {}
