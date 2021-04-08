import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService} from 'src/app/services/database.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-itemamount',
  templateUrl: './itemamount.page.html',
  styleUrls: ['./itemamount.page.scss'],
})
export class ItemamountPage implements OnInit {

  itemsname = [];
  selectdItems = [];
  url;
  testItems = [
    {
      description: 'pepsi',
      rate: '100',
      cost: '32',
      qty: '1',
      code: '9871',
      tax: false
    },
    {
      description: '7up',
      rate: '10',
      cost: '32',
      qty: '1',
      code: '9871',
      tax: false
    },
    {
      description: 'Coke',
      rate: '10',
      cost: '32',
      qty: '1',
      code: '9871',
      tax: false
    }
  ];
  rate = [];
  qty = [];
  quantity = 1;
  constructor(
    private router: Router,
    private databaseprovider: DatabaseService,
    private platform: Platform
  ) {
    // if (this.router.getCurrentNavigation().extras.state) {
    //   this.selectdItems = null;
    //   this.selectdItems = this.router.getCurrentNavigation().extras.state.user;
    //   console.log('sel:' + this.selectdItems);
    //   console.log('test:' + this.testItems);
      

    // }
    this.selectdItems = this.databaseprovider.getSeletedItems();
    this.url = databaseprovider.getItemUrl();
  //   for( let i = 0;i < this.selectdItems.length; i++) {
  //     this.itemsname[i] = this.selectdItems[i].name;
  //   }
  // //  this.itemname = this.selectdItems[0].name;
    debugger;
    this.platform.backButton.subscribeWithPriority(0, () => {
      console.log('hi here');
      });
  }

  ngOnInit(

  ) {
   // this.selectdItems = this.databaseprovider.getSeletedItems();
  }
  change(value) {
  
    if (value <0) {
      console.log('no');
    }
    if (value >0) {
      console.log('yeso');
    }
   // console.log('yes');
  }
  rateClicked(position) {
    const a = this.selectdItems[position].qty;
    // tslint:disable-next-line: radix
    if ( a === '') {
        const index = this.qty.findIndex( x => x.pos === position);
        const b = this.qty[index].qty;
        this.selectdItems[position].qty = b;
       // this.qty.splice(index, 1);

    }


    console.log(position);
    const obj = {
      pos: position,
      rate: this.selectdItems[position].rate
    };
   // this.rate.push(obj);
    this.rate.unshift(obj);
    this.selectdItems[position].rate = '';
    console.log(this.rate);

  }
  qtyClicked(position) {
    const a = this.selectdItems[position].rate;
    // tslint:disable-next-line: radix
    if ( a === '') {
        const index = this.rate.findIndex( x => x.pos === position);
        const b = this.rate[index].rate;
        this.selectdItems[position].rate = b.toString();
      //  this.rate.splice(index, 1);
    }

    const obj = {
      pos: position,
      qty: this.selectdItems[position].qty
    };
    this.qty.unshift(obj);
    this.selectdItems[position].qty = '';
    console.log(this.selectdItems[position].rate);

  }
  save() {
    
    this.selectdItems;

    let num =0;
    let des = 0;
    let a = true;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectdItems.length; i++) {
     
         if(!this.selectdItems[i].menu_order  || this.selectdItems[i].menu_order === null){
          // alert('Must add Quantity of Items');
          a = false;
         }
         if(!this.selectdItems[i].regular_price || this.selectdItems[i].regular_price === null){
          a = false;
        }
         if(!this.selectdItems[i].name || this.selectdItems[i].name === null){
          a= false;
          des =1;

         } else {
         num=num+1;
      }

    }

    if (a === true && des === 0) {

     // alert('finally');
      const navigationExtras: NavigationExtras = {
      state: {
        items: this.selectdItems
      }
    };
 
     this.router.navigate([this.url], navigationExtras);


    } else {
      if(des === 0) {
        alert('Please enter Rate and Qty of all items');
      } else {
        alert('Error Description of products cannot be empty');
      }

    }
   
    console.log(this.selectdItems);
  }
  tax(value, position) {
    console.log(value.detail.checked, position);
    this.selectdItems[position].tax = value.detail.checked;
  }
  back() {
    debugger;
    this.databaseprovider.deleteAllSelectedItems();
    this.selectdItems = [];
    this.router.navigate([this.url]);

  }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}
isReadonly() {return true;}


}
