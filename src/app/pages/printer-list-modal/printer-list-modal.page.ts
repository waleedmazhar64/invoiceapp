import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-printer-list-modal',
  templateUrl: './printer-list-modal.page.html',
  styleUrls: ['./printer-list-modal.page.scss'],
})
export class PrinterListModalPage implements OnInit {
  printerList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,) {
    this.printerList=this.navParams.get('data');
   }

  ngOnInit() {
  }

  ionViewDidLoad() {
    

  }

  select(data)
  {
    this.modalCtrl.dismiss(data);
  }
}