import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationStart } from '@angular/router';
import {  Platform,NavController } from '@ionic/angular';
import { DatabaseService} from 'src/app/services/database.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  status:any;
  accounts:any=[];
  acc:any=[];
  confirm:Number;
  company:any='';
  imageUrl:any='/assets/tinyinvoice.png';
  find:any;
  data:any=[];
  islogger:boolean=false;
  num:any;
  constructor(private plt: Platform,
    private nav: NavController,
    private googleplus:GooglePlus,private databaseprovider: DatabaseService,private platform: Platform, private router: Router,private storage: Storage) {
   
    /*this.storage.get('status').then ((val)=>{
      console.log(val);
      this.num=val;
    this.navigationMode();
    });*/
    // this.databaseprovider.setLanding(1);
    // if (this.databaseprovider.getLanding() === 1) {
    //     this.router.navigateByUrl('/menu/dashboard');
    //   }
 
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //   if (this.databaseprovider.getLanding() === 1) {
    //     this.router.navigateByUrl('/menu/dashboard');
    //     this.databaseprovider.setLanding(0);
    //   //  alert('yes');
    //   } else {
    //     this.databaseprovider.setLanding(1);
    //   }
    // });

    this.storage.get('ID').then((val) => {
      if (val !== null) {
         console.log('app is not running for first time');
         setTimeout(() => {
         // this.router.navigateByUrl('/menu/dashboard');
          this.nav.navigateRoot('/menu/dashboard');
         }, 3000);
         debugger;
         console.log('val1=' + val);
      } else {
        setTimeout(() => {
         // this.nav.navigateRoot('/menu/dashboard');
          this.router.navigateByUrl('/login');   
         }, 3000);
        console.log('val=' + val);
        debugger
      }
    });
    storage.get('first_time').then((val) => {
      if (val !== null) {
         console.log('app is not running for first time');
        // this.first = 0;
         storage.get('COM').then((val)=>{
          this.company = val;
        });

      } else {
       // this.company = 'Invoice.pk';
       // this.company = 'Tiny Invoice';
        this.storage.set('Sync', '');

      //  this.storage.set('COM', 'Tiny Invoice');

        // this.storage.set('COM', 'M.A. Traders Alipur Chatha');
        // this.storage.set('COM', 'Tiny Invoice');
         this.storage.set('COM', 'invoice.pk');
        // this.storage.set('imgUrl',this.imageUrl);

        storage.get('COM').then(( val ) => {
          this.company = val;
        });
      }
   });
    /*localStorage.getItem('file');
    console.log(localStorage.getItem('file'));
    if(localStorage.getItem('file')==null) { // if not login
      this.router.navigateByUrl('/login');
   
   //this will also work
   //this.navCtrl.goRoot('/');
  
    }
    else{ // if lo
      this.checkLogin();
      this.router.navigateByUrl('/menu/dashboard');
      //this will also work
      //this.navCtrl.goRoot('/app');
     
    }*/
    /*this.storage.get('status').then ((val)=>{
      console.log(val);
     
      if( val==null) { // if not login
        this.router.navigateByUrl('/login');
     
     //this will also work
     //this.navCtrl.goRoot('/');
    
      } 
      else{ // if login
      this.router.navigateByUrl('/menu/dashboard');
      //this will also work
      //this.navCtrl.goRoot('/app');
     
      }
   });*/
    /*platform.ready().then(() => {
      
      if( this.status==false) { // if not login
        this.router.navigateByUrl('/login');
     
     this will also work
     this.navCtrl.goRoot('/');
    
    } else { // if login
       this.router.navigateByUrl('/menu/dashboard');
      this will also work
      this.navCtrl.goRoot('/app');
     
    }
        
      });*/
     // this.storage.set('COM',this.company);
     
   }

  ngOnInit() {
    //this.navigationMode();
  }
  checkLogin()
  {
    this.googleplus.trySilentLogin({})
   .then(res => {
      console.log(res);
      }
  )
        
  .catch(err => console.error(err));
  }
  account()
  {
    this.databaseprovider.getLogAccount(this.status).then(data => {
      this.loadInfo();
      this.accounts = data;
      this.confirm=this.accounts.logup;
      console.log(this.accounts.logup);
    }) 
  }
  loadInfo(){
    this.databaseprovider.getAllAccount().then(res => {
      this.acc = res;
    })
  }
  navigationMode(){
    //localStorage.getItem('file');
    //console.log(localStorage.getItem('file'));
    //if(localStorage.getItem('file')=='true') { // if not login
      //this.checkLogin();
      //this.router.navigateByUrl('/menu/dashboard');
   //this will also work
   //this.navCtrl.goRoot('/');
    //}
    //if(localStorage.getItem('file')=='false'||localStorage.getItem('file')==null)
     //{
      //this.router.navigateByUrl('/login');
     //}
     setTimeout(() => {
      this.router.navigateByUrl('/login');   
     }, 6000);
    
  }
  addIt(){
    this.databaseprovider.addcompanyData()
    .then(data => {
     this.getAll();
     
    });
  
    console.log("Data Added");
  }
  getAll()
  {
    this.databaseprovider.getAllAccountData().then(data => {
      this.accounts = data;
      
      //console.log(this.company);
      console.log(this.imageUrl);
    });
  }
}
