import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  selectdItems = [];
  rate = [];
  qty = [];
  item;
  pos;
  url;
  tempItem;
  constructor(
    private router: Router,
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      debugger;
      this.item = this.router.getCurrentNavigation().extras.state.edititem;
      this.tempItem = this.item;
      this.pos = this.router.getCurrentNavigation().extras.state.position;
      this.url = this.router.getCurrentNavigation().extras.state.url;
      this.selectdItems.push(this.item);
      debugger;
    }
   }

  ngOnInit() {
  }
  save() {
    
    let num =0;
    let des = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectdItems.length; i++) {
     
         if(!this.selectdItems[i].menu_order  || this.selectdItems[i].menu_order === null){
          // alert('Must add Quantity of Items');
          num= 0;
         }
         if(!this.selectdItems[i].regular_price || this.selectdItems[i].regular_price === null){
         num=0;
        }
         if(!this.selectdItems[i].name || this.selectdItems[i].name === null){
          num=0;
          des =1;

         } else {
         num=num+1;
      }

    }
    if (num === this.selectdItems.length && des === 0) {
     // alert('finally');
     const navigationExtras: NavigationExtras = {
      state: {
        edititem: this.selectdItems[0],
        position: this.pos
      }
    };
     this.router.navigate([this.url], navigationExtras);


    } else {
      if(des === 0) {
        alert('Please enter Rate and Qty of items');
      } else {
        alert('Error Description of product cannot be empty');
      }
     
    }
    
   
    console.log(this.selectdItems);
  }
  back() {
    debugger;
    const navigationExtras: NavigationExtras = {
      state: {
        edititem: this.item,
        position: this.pos
      }
    };
    //this.selectdItems = [];
    this.router.navigate([this.url], navigationExtras);

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
  tax(value, position) {
    console.log(value.detail.checked, position);
    this.selectdItems[position].tax = value.detail.checked;
  }


}
