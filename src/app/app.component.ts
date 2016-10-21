import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
     //called first time before the ngOnInit()
    this.getDaysInMonth();
  }
  title = 'app works!';
  tilecolor = 'lightblue';
  showdates: any[] = [];
  inityear = 2012;
  initmonth = 6 ;



  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];
  employees: Object[] = [
      {
        name: "danial"
      },
      {
        name: "john"
      },
      {
        name: "sockMonkey"
      }
  ];
  tiles: any[] = [
    {text: 'name', cols: 5, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightblue'},


  ];

  getDaysInMonth() {
    console.log('enter');
    var month = this.initmonth;
    var year = this.inityear;
      console.log('enter'+month+year);
     var date = new Date(year, this.initmonth, 1);
     var days = [];
     console.log(date.getMonth());
     while (date.getMonth() == this.initmonth) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
     console.log('inside dats'+days)
     this.showdates = days;
     return days;
   };

}
