import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { DatabaseService} from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  contactsfound:any=[];
  clients:any=[];
  userId:any;
  name:any;
  email:any;
  phone:any;
  address:any;
  shipping:any;
  ldates:any;
  contactor = {
    displayName:null, 
    phoneNumbers:null, 
    email:null
 };

  constructor(private contacts: Contacts,private databaseprovider: DatabaseService,private storage: Storage) {
    this.storage.get('id').then ((val)=>{
      console.log(val);
      this.userId=val;
   });
   this.getStartDate();

   }

  ngOnInit() {
  }
 getContact()
{
  this.contacts.pickContact().then((contact) => {
    this.contactsfound = contact;
    console.log(this.contactsfound);
    this.contactor.displayName = contact.displayName; 
      this.contactor.phoneNumbers = contact.phoneNumbers[0].value; 
      this.contactor.email=contact.emails[0].value;
      this.name=this.contactor.displayName;
      this.phone=this.contactor.phoneNumbers;
      this.email=this.contactor.email; 
      console.log(this.email);
      console.log(this.phone);
      console.log(this.name);
   })
}
addClientInfo()
{
  this.databaseprovider.addClient(this.userId,this.name,this.email,this.phone,this.address,this.shipping,this.ldates,this.ldates,this.userId,this.userId )
  .then(data => {
    this.loadClientData();
  });
  console.log("Data Added");
}
loadClientData() {
  this.databaseprovider.getAllClient().then(data => {
    this.clients = data;
  })
}

Cickit()
{
  console.log(this.email);
  console.log(this.phone);
  console.log(this.name);
  console.log(this.address);
  console.log(this.shipping);
}
getStartDate()
{
   var dateObj=new Date();

   var year= dateObj.getFullYear().toString();
   var month= dateObj.getMonth().toString();
   var date= dateObj.getDate().toString();
   var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

   this.ldates=monthArray[month]+'/'+date+'/'+year;
   console.log(this.ldates);

}
}
