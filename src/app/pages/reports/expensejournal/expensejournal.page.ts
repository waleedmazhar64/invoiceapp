import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform, PickerController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { PickerOptions } from '@ionic/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { DatePicker } from '@ionic-native/date-picker/ngx';

// import { start } from 'repl';


@Component({
  selector: 'app-expensejournal',
  templateUrl: './expensejournal.page.html',
  styleUrls: ['./expensejournal.page.scss'],
})
export class ExpensejournalPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = [];
  currency;
  option = false;
  displaystartdate = '';
  displayenddate = '';
  pdfObj = null;
  startdate = new Date().setHours(0, 0, 0, 0).toString();
  enddate = new Date().setHours(23, 59, 59, 999).toString();
  company = '';
  allcolor = 'dark';
  thismonthcolor = 'dark';
  lastmonthcolor = 'dark';
  thisquartercolor = 'dark';
  createstatementcolor = 'success';
  selected = 0;
  categoryselected = 0;
  year  = new Date().toString();
  category = 'All';


  constructor(
    private router: Router,
    private syncService: SyncService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private storage: Storage,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
    private datepicker: DatePicker,
    private pickerCtrl: PickerController

  ) {
    this.year = this.datePipe.transform(this.year, 'yyyy');
    this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
    this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
    this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
    this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    this.getAllData();
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
      }
    });
  }

  ngOnInit() {
  }
  share() {
    // this.getData();
    this.createPdf();
    }
    back() {
      this.router.navigate(['/menu/reports']);
    }
    onActivate(event) {
      if (event.type === 'click') {
        console.log(event.row);
    }
    }
    async showBasicPicker() {
      let opts: PickerOptions = {
        buttons: [

          {
            text: 'Cancel',
            handler: (value: any): void => {
              console.log(value, 'cancel');
              //  ('can')
              this.pickerCtrl.dismiss();
            }
          },
          {
            text: 'Done',
            handler: ( value: any): void => {
              // (value.Categorie.text);
              this.category = value.Categorie.text;
              if (this.category === 'All') {
                this.categoryselected = 0;
              } else {
                this.categoryselected = 1;
              }
              // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);

              if (this.categoryselected === 0 && this.selected === 0 ) {
                this.data = [];
                this.getAllData();
              } else if ( this.categoryselected === 1 && this.selected === 0) {
                this.data = [];
                this.getDataCategory();
              } else if ( this.categoryselected === 0 && this.selected === 1) {
                this.data = [];
                this.getDataTime();
              } else if ( this.categoryselected === 1 && this.selected === 1) {
                this.data = [];
                this.getDataCategoryAndTime();
              }
            }
          }
        ],
        columns: [
          {
            name: 'Categorie',
            options: [
              {text: 'All', value: 'All'},
              {text: 'Accomodation', value: 'Accomodation'},
              {text: 'Advertising', value: 'Advertising'},
              {text: 'Airface', value: 'Airface'},
              {text: 'Car Rental', value: 'Car Rental'},
              {text: 'Clothing', value: 'Clothing'},
              {text: 'Communication', value: 'Communication'},
              {text: 'Entertainment', value: 'Entertainment'},
              {text: 'Food and Beverages', value: 'Food and Beverages'},
              {text: 'General', value: 'General'},
              {text: 'Groceries', value: 'Groceries'},
              {text: 'Health', value: 'Health'},
              {text: 'Office Supplies', value: 'Office Supplies'},
              {text: 'Rent or Lease', value: 'Rent or Lease'},
            ]
          }

        ]
      };
      let picker = await this.pickerCtrl.create(opts);
      picker.present();
    }
    async getDataTime() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
  
      this.syncService.getExpenseJournalByTime(this.startdate, this.enddate, this.currency).then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            date:   this.total[i].Date,
            category:  this.total[i].Category,
            name:   this.total[i].Name,
            description:  this.total[i].Description,
            total:   this.total[i].Amount,
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        this.option = false;
        loading.dismiss();
        //('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    async getDataCategory() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
  
      this.syncService.getExpenseJournalByCategory(this.category, this.enddate).then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            date:   this.total[i].Date,
            category:  this.total[i].Category,
            name:   this.total[i].Name,
            description:  this.total[i].Description,
            total:   this.total[i].Amount,
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        this.option = false;
        loading.dismiss();
        //('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    async getDataCategoryAndTime() {
      let loading = await this.loadingCtrl.create();
      await loading.present();


      this.syncService.getExpenseJournalByTimeAndCategory(this.startdate, this.enddate, this.category, this.currency).then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            date:   this.total[i].Date,
            category:  this.total[i].Category,
            name:   this.total[i].Name,
            description:  this.total[i].Description,
            total:   this.total[i].Amount,
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        this.option = false;
        loading.dismiss();
        //('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    async getAllData() {
      let loading = await this.loadingCtrl.create();
      await loading.present();

      this.syncService.getExpenseJournal(this.currency).then((data) => {
        this.total = data;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.total.length; i++) {
          const data1 = {
            date:   this.total[i].Date,
            category:  this.total[i].Category,
            name:   this.total[i].Name,
            description:  this.total[i].Description,
            total:  this.total[i].Amount,
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        loading.dismiss();
        this.option = false
        //('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    optionsOpen() {
      if (this.option === true) {
        this.option = false;
       // ('option: ' + this.option);
      } else {
        this.option = true;
       // ('option: ' + this.option);

      }
    }
    selectStartDate() {
      var options = {
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };

      this.datepicker.show(options).then((date) => {
        this.selected = 1;
       // ('cat ' + this.categoryselected + '\nbutton ' + this.selected);
        this.startdate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.data = [];
        if (this.categoryselected === 0 && this.selected === 0 ) {
          this.data = [];
          this.getAllData();
        } else if ( this.categoryselected === 1 && this.selected === 0) {
          this.data = [];
          this.getDataCategory();
        } else if ( this.categoryselected === 0 && this.selected === 1) {
          this.data = [];
          this.getDataTime();
        } else if ( this.categoryselected === 1 && this.selected === 1) {
          this.data = [];
          this.getDataCategoryAndTime();
        }
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
        this.option = false;
       // console.log('selected:',this.myDate);
      });
    }
    selectEndDate() {
      var options={
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };

      this.datepicker.show(options).then((date) => {
        this.selected = 1;
        ('cat ' + this.categoryselected + '\nbutton '+ this.selected);
        date.setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';

        this.data = [];
        if (this.categoryselected === 0 && this.selected === 0 ) {
          this.data = [];
          this.getAllData();
        } else if ( this.categoryselected === 1 && this.selected === 0) {
          this.data = [];
          this.getDataCategory();
        } else if ( this.categoryselected === 0 && this.selected === 1) {
          this.data = [];
          this.getDataTime();
        } else if ( this.categoryselected === 1 && this.selected === 1) {
          this.data = [];
          this.getDataCategoryAndTime();
        }
        this.option = false;

       // console.log('selected:',this.myDate);
      });
    }
    all() {
      this.selected = 0;
      this.thisquartercolor = 'dark';
      this.allcolor = 'primary';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      this.data = [];
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
      this.option = false;
      // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);


    }
    thisMonth() {
      this.selected = 1;
      this.thismonthcolor = 'primary';
      this.lastmonthcolor = 'dark';
      this.thisquartercolor = 'dark';
      this.allcolor = 'dark';
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      // ('first: ' + this.startdate + 'Last: ' + this.enddate);
      this.data = [];
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
      this.option = false;
      // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);

    }
    lastMonth() {
      this.selected = 1;
      this.lastmonthcolor = 'primary';
      this.thisquartercolor = 'dark';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() , 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      // ('first: ' + this.startdate + 'Last: ' + this.enddate);
      this.data = [];
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
      this.option = false;
      // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);

    }
    async thisquarter() {
      this.selected = 1;
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.thisquartercolor = 'primary';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      const current = new Date();
      const currentmonth = current.getMonth() + 1;
      const currentYear = current.getFullYear().toString();
      // ('cat ' + this.categoryselected + '\nbutton ' + this.selected);

      if (currentmonth >= 1 && currentmonth <= 3) {
        this.data = [];
        this.getQ1();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 4 && currentmonth <= 6) {
        this.data = [];
        this.getQ2();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 7 && currentmonth <= 9) {
        this.data = [];
        this.getQ3();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 10 && currentmonth <= 12) {
        this.data = [];
        this.getQ4();
        this.option = false;
        loading.dismiss();
      }
    }
    async test() {
      this.thisquartercolor = 'primary';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      this.data = [];
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
      this.option = false;
    }

    getQ1() {
      const firstdayofmonth = new Date(parseInt(this.year), 0, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  2 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      const a = Math.round((new Date(first1)).getTime() / 1000);
      const b = Math.round((new Date(last1)).getTime() / 1000);
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
    }
    getQ2() {
      const firstdayofmonth = new Date(parseInt(this.year), 3, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  5 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      const a = Math.round((new Date(first1)).getTime() / 1000);
      const b = Math.round((new Date(last1)).getTime() / 1000);
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
    }
    getQ3() {
      const firstdayofmonth = new Date(parseInt(this.year), 6, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  8 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
    }
    getQ4() {
      const firstdayofmonth = new Date(parseInt(this.year), 9, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  11 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      if (this.categoryselected === 0 && this.selected === 0 ) {
        this.data = [];
        this.getAllData();
      } else if ( this.categoryselected === 1 && this.selected === 0) {
        this.data = [];
        this.getDataCategory();
      } else if ( this.categoryselected === 0 && this.selected === 1) {
        this.data = [];
        this.getDataTime();
      } else if ( this.categoryselected === 1 && this.selected === 1) {
        this.data = [];
        this.getDataCategoryAndTime();
      }
    }
    async createPdf() {
      let a ;
      let x ;
      let y ;
      let z ;
      let left;
      let right;

      let items = [];
      let loading = await this.loadingCtrl.create();
      await loading.present();
      const itemss = [];

      for (let i = 0; i < this.data.length; i++) {
                itemss.push(
                [
                  { text:  this.data[i].date.toString() , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].category.toString()  , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].name.toString(), fontSize: 12, color: '#000000' },
                  { text:  this.data[i].description.toString()  , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].total.toString(), fontSize: 12, color: '#000000' }
                 ]
          );
      }
   
      left  = {
          text: [
                { text: this.company, bold: true, fontSize: 20, alignment: 'left'},
          ]
        };
      right = {
          text: [
                    { text:  this.datePipe.transform(new Date(), 'dd MMM yyyy') , color: '#000000' ,  fontSize: 18, alignment: 'right'},
                  ]
        };
      var docDefinition = {
      pageSize: 'A4',
      pageMargins: [ 20, 20, 20, 20 ],
        content: [
          { text: 'EXPENSE JOURNAL', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
          // { text: this.year, bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},

          // { margin: [0, 10, 0, 0],
          //   text: 'CUSTOMER STATEMENT', style: 'header', fontSize: 25, alignment: 'left', color: '#ff0000' },
            {
              margin: [0, 10, 0, 0],
              canvas:
              [
                  {
                      type: 'line',
                      x1: 0, y1: 0,
                      x2: 555, y2: 0,
                      lineWidth: 3
                  },
              ]
           },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [ 300, 250 ],
                body: [
                  [
                      left, right
                  ],
                ],

              },
              layout: 'noBorders'
            },
        {
          margin: [0, 20, 0, 0],
          text: [
            { text: 'Date ' , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '                               Category'                      , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '                 Name' , style: 'subheader',  bold: true, fontSize: 14, color: '#000000' },
            { text: '              Description'                      , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '                    Total' , style: 'subheader',  bold: true, fontSize: 14, color: '#000000' },
          ]
        },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [140, 100, 100, 110, 100 ],
                body: itemss
            },
            layout: 'noBorders'
        },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 10,
            bold: true,
           // margin: [0, 15, 0, 0],
            color: '#000000'
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          },
          backgroundcolor: ''
        }
      };
        this.pdfObj = pdfMake.createPdf(docDefinition);
        this.downloadPdf(loading);
   //   });
     
    }
  
    downloadPdf(loading) {
      debugger
      if (this.plt.is('cordova')) {
        this.pdfObj.getBuffer((buffer) => {
         // var blob = new Blob([buffer], { type: 'application/pdf' });
          var utf8 = new Uint8Array(buffer);
          var binaryArray = utf8.buffer;
          var blob = new Blob([binaryArray], { type: 'application/pdf' });
          const a = new Date().getTime().toString();
          this.file.writeFile(this.file.dataDirectory,  a + '.pdf', blob).then(fileEntry => {
            // this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf'); 
            // loading.dismiss();
           });
          this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
            loading.dismiss();
            console.log('social share');
            console.log(this.file.dataDirectory);
            }).catch(() => {
        
            });
          debugger
          // Save the PDF to the data Directory of our App
          // this.file.writeFile(this.file.dataDirectory, 'Invoice4.pdf', blob).then(fileEntry => {
          //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
          // });
        });
      } else {
        // On a browser simply use download!
        this.pdfObj.download();
      }
    }

}
