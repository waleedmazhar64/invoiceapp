import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  message = '';
  received = '';
  url;
  constructor(
    private location: Location,
    private router: Router,
    private storage: Storage
  ) {
    storage.get('comment').then((val) => {
      if (val !== null) {
          this.message = val;
      }
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.message = this.router.getCurrentNavigation().extras.state.user;
      this.received = this.router.getCurrentNavigation().extras.state.user;
      this.url = this.router.getCurrentNavigation().extras.state.url;

    } 

   }

  ngOnInit() {
  }
  back() {
    const navigationExtras: NavigationExtras = {
      state: {
      //  user: this.message
        message: this.message

      }
    };
    this.router.navigate([this.url], navigationExtras);
  //  this.location.back();
  }
  cancel() {
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       message: this.received
      }
    };
    this.router.navigate([this.url], navigationExtras);
  }

}
