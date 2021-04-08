import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';



const routes: Routes = [
  {
    path: '',
    component: DashboardPage
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
    DatePipe,
    Network,
    StatusBar,
    WebView,
    HTTP,
    GooglePlus
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
