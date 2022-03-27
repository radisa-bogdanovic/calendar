import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  daysNames: string[] = ['Mon', 'Tue', 'Sat', 'The', 'Fri', 'Sun', 'Wed'];
  monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  daysinMonth: number[] = [];
  date = new Date();
  thisMonthIndex = this.date.getMonth() + 1;
  thisMonth = this.monthNames[this.thisMonthIndex - 1];
  thisYear = this.date.getFullYear();
  constructor() {}

  ngOnInit(): void {}

  nextMonth() {
    if (this.thisMonthIndex === 12) {
      this.thisMonthIndex = 1;
      this.thisYear++;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
    } else {
      this.thisMonthIndex = this.thisMonthIndex + 1;
      console.log(this.thisMonthIndex);
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
    }
  }
  prevMonth() {
    if (this.thisMonthIndex === 1) {
      this.thisMonthIndex = 12;
      this.thisYear--;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
    } else {
      this.thisMonthIndex = this.thisMonthIndex - 1;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
    }
  }
}
