import { NgModule ,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideRoutes} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { Camera } from '@ionic-native/Camera/ngx';
// import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicStorageModule } from '@ionic/storage/';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { Contacts } from '@ionic-native/contacts';
// import { Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx';
// import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';

// import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

// import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';

import { Network } from '@ionic-native/network/ngx';
// import { DatePickerModule } from 'ionic4-date-picker';
// import { CallNumber } from '@ionic-native/call-number/ngx';
// import { SMS } from '@ionic-native/sms/ngx';
import { ReactiveFormsModule } from '@angular/forms';
// import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import 'chartjs-plugin-zoom';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

// import { FileOpener } from '@ionic-native/file-opener/ngx';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


// import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { AutoCompleteModule } from 'ionic4-auto-complete';

// import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';





import { from } from 'rxjs';

import { AddpurchasedorderPage } from './pages/addpurchasedorder/addpurchasedorder.page';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,//ReactiveFormsModule,
  //  DatePickerModule,
    IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    Network,
    SQLitePorter,
    GooglePlus,
    BluetoothSerial,
    Facebook,
    // FingerprintAIO,
    // AndroidFingerprintAuth,
    // FingerprintAIO,
   // Camera,
   // File,
    WebView,
   // FilePath,
   // LocalNotifications,
   // Contacts,
    HTTP,
   // DatePicker,
    DatePipe,
   // CallNumber,
    AddpurchasedorderPage,
   // SMS,
   // SocialSharing,
   // FileOpener


 //   Headers,
 //   RequestOptions
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
