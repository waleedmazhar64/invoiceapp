import { Component, OnInit } from '@angular/core';
import { DatabaseService} from 'src/app/services/database.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-additem-items',
  templateUrl: './additem-items.page.html',
  styleUrls: ['./additem-items.page.scss'],
})
export class AdditemItemsPage implements OnInit {

  items = [];
  tempItems = [];
  tempActiveItems = [];
  tempInactiveItems = [];
  inactiveItems = [];
  activeItems = [];
  description = '';
  selected = [];
  url;
  constructor(
    private databaseprovider: DatabaseService,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private router: Router,

  ) { 
    if (this.router.getCurrentNavigation().extras.state) {

      this.url = this.router.getCurrentNavigation().extras.state.url;
      databaseprovider.setItemUrl(this.url);
      debugger;
    }
    this.databaseprovider.deleteAllSelectedItems();
    this.getDataNativeHttp();
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //     console.log('Route: '+route.url);
    //     const a = this.databaseprovider.getupdateitems();
    //     debugger;
    //     if(route.url == '/add-item/additem-items' && a === 1) {
    //     this.getDataNativeHttp();
    //     }
    // });
    // if(this.items.length === 0) {
    //   debugger;
    //    this.getDataNativeHttp();
    // }
  }

  ngOnInit() {
  }
  clearDescription() {
    this.description = '';
  }
  itemClicked(item) {
    const selecteditem = this.activeItems.find(x => x.name === item.name);
    this.selected.push(selecteditem);
    this.databaseprovider.pushItem(selecteditem);

    console.log(this.selected);

  }
  removeSelected(pos) {
    debugger;
    let a = this.databaseprovider.getSeletedItems();
    this.selected.splice(pos,1);
    this.databaseprovider.removeSelectedItem(pos);
    a = this.databaseprovider.getSeletedItems();
    debugger

  }
  initializeActiveItems(){
    this.tempActiveItems = this.activeItems;
  }
  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    let nativeCall = this.nativeHttp.get('https://riz.livauto.com/wp-json/wc/v3/products',{},{
      'Content-Type':'application/json',
      'Authorization': 'Basic Y2tfOWNlMGIyZmZmYjZlNzJlMTM3NGY3MTgzOTQ0NDBhMDkwNmNiOWVkZDpjc183MmIxMDQyMWExM2I4MmQzN2M0ODE0MDI5YmRmN2E0NTIyYzBjMTI4'
    });

    from(nativeCall).pipe(
      finalize(() => loading.dismiss)
    )
    .subscribe(data => {
      loading.dismiss();
      console.log('Native data:',data);
      this.items = JSON.parse(data.data);
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].reviews_allowed === true) {
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
      this.initializeActiveItems();
      this.databaseprovider.setupdateitems(0);
      debugger;
    },err =>{
      console.log('JS call error',err);
    });

  }
}
