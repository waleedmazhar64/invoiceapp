import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { DatabaseService} from 'src/app/services/database.service';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SyncService } from 'src/app/services/sync.service';




@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  selectedItems = [];
  url;
  constructor(
    private location: Location,
    private router: Router,
    private databaseprovider: DatabaseService,
    private alrtCtrl: AlertController,
    private googlePlus: GooglePlus,
    private syncService: SyncService
  ) { 
    if (this.router.getCurrentNavigation().extras.state) {

      this.url = this.router.getCurrentNavigation().extras.state.url;
      debugger;
    }
  }

  ngOnInit() {
  }
  back() {
   // this.location.back();
    this.router.navigate([this.url]);
   }
   next() {
     this.selectedItems = this.databaseprovider.getSeletedItems();
     this.url = this.databaseprovider.getItemUrl();
     if (this.selectedItems.length > 0) {
     
      const navigationExtras: NavigationExtras = {
        state: {
          user: this.selectedItems,
          url: this.url
        }
      };
      this.router.navigate(['itemamount'], navigationExtras);
      console.log(this.selectedItems);
     }
     else {

      this.showALert('Warning','','Item description cant be empty');
     }
   }
   showALert(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
   // cssClass: 'alertSize',
    buttons: [
       {
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  }).then(alert => alert.present());
}
login() {
  this.googlePlus.login({})
  .then(async res => {
    console.log(res);
    this.syncService.checKEmail(res.email).then((data) => {
      if (data[0].success === 1) {
        console.log('matched');
        this.router.navigate(['/menu/clients']);
        // this.storage.set("UserName" , res.displayName);
        // this.storage.set('loginStatus', 'true');
        // this.storage.set('loginEmail', res.email);
        // this.storage.set('ID', data[0].ID);
        // this.events.publish('refreshShowPages', 'saad', '');
        // this.addAccount(res.email, res.userId);
        // loading.dismiss();
      }
      if (data[0].success === 0) {
        this.logout();
        // loading.dismiss();
        // this.onButtonClick();
      }
    });
  });
}
logout() {
  this.googlePlus.trySilentLogin({})
  .then(res => {
     console.log(res);
     this.googlePlus.logout()
     .then(res => {
       console.log(res);
       alert('logout ' + res)
     })
     .catch(err => console.error(err));
     }
 )
 .catch(err => console.error(err));
 
}
}
