import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private btSerial:BluetoothSerial, private alertCtrl:AlertController) { }

  searchBt()
  {
    return this.btSerial.list();
  }

  connectBT(address)
  {
    return this.btSerial.connect(address);

  }

  testPrint(address,printData)
  {
     this.btSerial.isEnabled().then(
      () => {
        console.log('enabled');
        let xyz=this.connectBT(address).subscribe(data=>{
          this.btSerial.write(printData).then(async dataz=>{
            console.log("WRITE SUCCESS",dataz);
    
            let mno=await this.alertCtrl.create({
              
              header: "Print SUCCESS!",
              buttons: ['Dismiss']
            });
            mno.present();
    
            xyz.unsubscribe();
          },async errx=>{
            console.log("WRITE FAILED",errx);
            let mno=await this.alertCtrl.create({
              header: "ERROR " + errx,
              buttons: ['Dismiss']
            });
            mno.present();
          });
          },async err=>{
            console.log("CONNECTION ERROR",err);
            let mno=await this.alertCtrl.create({
              header: "ERROR " + err,
              buttons: ['Dismiss']
            });
            mno.present();
          });
    },
      () => {
        //alert("Kindly turn on bluetooth");

        //this.enableBluetooth();
      }
    );
  }
  enableBluetooth(){
    this.btSerial.enable().then(
      () => {
        alert("Bluetooth is enabled");
      }, () => {
        alert("The user did *not* enable Bluetooth");
      }
    ); 
  }
}