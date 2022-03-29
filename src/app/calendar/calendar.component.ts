import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  daysNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  monthNames: string[] = [
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
    'Jan',
  ];
  daysInMonth: number[] = [];
  date = new Date();
  monthIndex = this.date.getMonth() + 1;
  month = this.monthNames[this.monthIndex - 1];
  year = this.date.getFullYear();
  daysInMonthNumber = new Date(this.year, this.monthIndex, 0).getDate();
  firstday = new Date(
    this.date.setDate(this.date.getDate() - this.date.getDay())
  );

  constructor() {}

  ngOnInit(): void {
    this.createDays();
  }

  nextMonth() {
    if (this.monthIndex === 12) {
      this.monthIndex = 1;
      this.year++;
      this.getMonth();
      this.dayInMonthNumber();
      this.createDays();
    } else {
      this.monthIndex = this.monthIndex + 1;
      this.getMonth();
      this.dayInMonthNumber();
      this.createDays();
    }
  }
  prevMonth() {
    if (this.monthIndex === 1) {
      this.monthIndex = 12;
      this.year--;
      this.getMonth();
      this.dayInMonthNumber();
      this.createDays();
    } else {
      this.monthIndex = this.monthIndex - 1;
      this.getMonth();
      this.dayInMonthNumber();
      this.createDays();
    }
  }
  createDays() {
    this.daysInMonth = [];
    let firstDay = new Date(this.year, this.monthIndex, 1)
      .toDateString()
      .slice(0, 3);

    for (let i = 1; i < this.daysInMonthNumber; i++) {
      this.daysInMonth.push(i);
    }
    if (this.daysNames.indexOf(firstDay) > 0) {
      this.daysInMonth = [
        ...Array(this.daysNames.indexOf(firstDay)).fill('-'),
        ...this.daysInMonth,
      ];
    }
  }

  getMonth() {
    return (this.month = this.monthNames[this.monthIndex - 1]);
  }
  dayInMonthNumber() {
    return (this.daysInMonthNumber = new Date(
      this.year,
      this.monthIndex,
      0
    ).getDate());
  }
}
