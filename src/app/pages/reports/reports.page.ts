import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService} from 'src/app/services/database.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(
    private router: Router,
    private databaseservice: DatabaseService


  ) {
  }

  ngOnInit() {
  }
  day() {
    this.databaseservice.setSalesByDayValue(2);
    this.router.navigate(['day']);
  }
  month() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['month']);
  }
  client() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['customer']);
  }
  item() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['item']);
  }
  expenseCategory() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['expensecategory']);
  }
  expenseJournal() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['expensejournal']);
  }
  customerAging() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['customeraging']);
  }
  year() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['year']);
  }
  quarter() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['quarter']);
  }
  customerStatement() {
    this.databaseservice.setSalesByDayValue(2); 
    this.router.navigate(['customerstatement']);

  }

}
