import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
     //called first time before the ngOnInit()
    this.getDaysInMonth(4,2016);
  }
  title = 'app works!';
  tilecolor = 'lightblue';
  showdates: any[] = [];



  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];
  dogs: Object[] = [

  ];
  tiles: any[] = [
    {text: 'Name', cols: 5, rows: 1, color: 'lightblue'},
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

  getDaysInMonth(month, year) {
     var date = new Date(year, month, 1);
     var days = [];
     while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
     console.log('inside dats'+days[1].getDate())
     this.showdates = days;
     return days;
   };

}
