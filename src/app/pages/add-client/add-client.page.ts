import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Platform, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  name;
  email = '';
  add1 = '';
  add2 = '';
  add3 = '';
  shippingTo = '';
  sAdd1 = '';
  sAdd2 = '';
  sAdd3 = '';
  clients = [
    {
      name: 'saad',
      email: 'saad@gmail.com',
      add1: 'islamabad',
      add2: '',
      add3: '',
      shippingTo: 'usman',
      sAdd1: '',
      sAdd2: '',
      sAdd3: '',

    },
    {
      name: 'usman',
      email: 'usman@gmail.com',
      add1: 'islamabad',
      add2: '',
      add3: '',
      shippingTo: 'usman',
      sAdd1: '',
      sAdd2: '',
      sAdd3: '',

    },
    {
      name: 'daniyal',
      email: 'daniyal@gmail.com',
      add1: 'islamabad',
      add2: '',
      add3: '',
      shippingTo: 'usman',
      sAdd1: '',
      sAdd2: '',
      sAdd3: '',

    }
  ];
  constructor(
    private location: Location,
    private contacts: Contacts,
    private plt: Platform,
    private router: Router,
    private alrtCtrl: AlertController,

  ) {
    if (this.router.getCurrentNavigation().extras.state) {

      if ( typeof this.router.getCurrentNavigation().extras.state.name !== 'undefined') {
        if (this.router.getCurrentNavigation().extras.state.name === 'Client') {
          this.name = '';
        } else {
          this.name = this.router.getCurrentNavigation().extras.state.name ;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.email !== 'undefined') {
          this.email = this.router.getCurrentNavigation().extras.state.email;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.add1 !== 'undefined') {
          this.add1 = this.router.getCurrentNavigation().extras.state.add1;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.add2 !== 'undefined') {
          this.add2 = this.router.getCurrentNavigation().extras.state.add2;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.add3 !== 'undefined') {
          this.add3 = this.router.getCurrentNavigation().extras.state.add3;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.shippingTo !== 'undefined') {
          this.shippingTo = this.router.getCurrentNavigation().extras.state.shippingTo;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.sAdd1 !== 'undefined') {
          this.sAdd1 = this.router.getCurrentNavigation().extras.state.sAdd1;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.sAdd2 !== 'undefined') {
          this.sAdd2 = this.router.getCurrentNavigation().extras.state.sAdd2;
        }
        if ( typeof this.router.getCurrentNavigation().extras.state.sAdd3 !== 'undefined') {
          this.sAdd3 = this.router.getCurrentNavigation().extras.state.sAdd3;
        }
      }
    }
   }

  ngOnInit() {
  }
  back() {
   // this.location.back();
    this.router.navigate(['addinvoice']);
  }
  save() {
    debugger;
    if (this.name !== '' && typeof this.name !== 'undefined') {
      const navigationExtras: NavigationExtras = {
        state: {
          name: this.name,
          email: this.email,
          add1: this.add1,
          add2: this.add2,
          add3: this.add3,
          shippingTo: this.shippingTo,
          sAdd1: this.sAdd1,
          sAdd2: this.sAdd2,
          sAdd3: this.sAdd3
        }
      };
      this.router.navigate(['addinvoice'], navigationExtras);

    } else {
      this.shareALert('Warning','','Name cant be empty.');
    }

  }
  shareALert(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    cssClass: 'alertSize',
    buttons: [
      {
        text: 'OK',
        cssClass: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }
    ]
  }).then(alert => alert.present());
  }
  setInfo(client) {
    if (client.name !== '') {
        this.name = client.name;
    }
    if (client.email !== '') {
        this.email = client.email;
    }
    if (client.add1 !== '') {
        this.add1 = client.add1;
     }
    if (client.shippingTo !== '') {
        this.shippingTo = client.shippingTo;
    }
  }
  clearEmail() {
    this.email = '';
  }
  clearadd1() {
    this.add1 = '';
  }
  clearadd2() {
    this.add2 = '';
  }
  clearadd3() {
    this.add3 = '';
  }
  clearShippingTo() {
    this.shippingTo = '';
  }
  clearSadd1() {
    this.sAdd1 = '';
  }
  clearSadd2() {
    this.sAdd2 = '';
  }
  clearSadd3() {
    this.sAdd3 = '';
  }
  initContacts(): void {
    // let contact: Contact = this.contacts.create();
 
    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   () => console.log('Contact saved!', contact),
    //   (error: any) => console.error('Error saving contact.', error)
    // );
 
    // If you want to open the native contacts screen and select the contacts from there use pickContact()
 
    this.contacts.pickContact()
                 .then((response: Contact) => { 
                    console.log(response);
                    this.name = response.displayName;
                 });
 }
 openList() {
  debugger;
  this.plt.ready().then((readySource) => {
    console.log('Platform ready from', readySource);
    // Platform now ready, execute any required native code
    this.initContacts();
  });
 }
 clientsPage() {

  this.router.navigate(['add-client-clients']);
 }

}
