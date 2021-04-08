import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-defaultcomment',
  templateUrl: './defaultcomment.page.html',
  styleUrls: ['./defaultcomment.page.scss'],
})
export class DefaultcommentPage implements OnInit {

  comment = '';
  constructor(
    private location: Location,
    private storage: Storage
  ) {
    storage.get('comment').then((val) => {
      if (val !== null) {
          this.comment = val;
      }
    });
   }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
  save() {
    this.storage.set('comment', this.comment.toString());
    this.location.back();
  }

}
