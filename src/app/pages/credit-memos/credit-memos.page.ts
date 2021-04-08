import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-credit-memos',
  templateUrl: './credit-memos.page.html',
  styleUrls: ['./credit-memos.page.scss'],
})
export class CreditMemosPage implements OnInit {

  paidcolor = 'primary';
  unpaidcolor = 'primary';
  pend = 'primary';
  with = 'primary';
  items = [
    {
       name: 'saad',
       date: '10/09/2019',
       duedate: '24',
       total: '108',
       selected: false
    },
    {
      name: 'saad',
      date: '10/09/2019',
      duedate: '24',
      total: '109',
      selected: false
    }

  ];
  editSelected = false; 
  itemSelected = false;
  selectedCount = this.items.filter(x => x.selected === true).length;
  s = 0;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  addIcon() {
    this.router.navigate(['addcreditmemos']);
  }
  edittxt() {
    alert('edit');
  }
  doRefresh(refresher) {
  //   this.data.subscribe(data => {
  //     this.items = data.results;
  //     refresher.target.complete();
  //  });
  this.items = this.items;
  }
  itemClicked(item) {
    const navigationExtras: NavigationExtras = {
       state: {
         user: item
       }
     };
     this.router.navigate(['invoicedetails'], navigationExtras);
  }
  edit(item) {

    alert('edit:' + item.total);
  }
  delete(item) {
    alert('del:' + item.total);
  }
  update() {
    //debugger;
    this.selectedCount = this.items.filter(x => x.selected === true).length;
  }
  paid() {

    this.paidcolor = 'success';
    this.unpaidcolor = 'primary';
    this.with = 'primary';
    this.pend = 'primary';
  }
  unpaid() {
    this.unpaidcolor = 'success';
    this.paidcolor = 'primary';
    this.with = 'primary';
    this.pend = 'primary';
  }
  back() {
    this.s = 0;
    this.paidcolor = 'primary';
    this.unpaidcolor = 'primary';
    this.with = 'primary';
    this.pend = 'primary';

  }
  pending() {
    this.paidcolor = 'primary';
    this.unpaidcolor = 'primary';
    this.with = 'primary';
    this.pend = 'success';
  }
  withdrawn() {
    this.paidcolor = 'primary';
    this.unpaidcolor = 'primary';
    this.with = 'success';
    this.pend = 'primary';
   // this.content.();

    
  }

}
