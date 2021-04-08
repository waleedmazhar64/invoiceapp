import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';


import { IonicModule } from '@ionic/angular';

import { EditexpensePage } from './editexpense.page';

const routes: Routes = [
  {
    path: '',
    component: EditexpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DatePipe,
    Location,
    File,
    FilePath,
    WebView,
    DatePicker,
    HTTP,
    Network,
    Camera
  ],
  declarations: [EditexpensePage]
})
export class EditexpensePageModule {}
