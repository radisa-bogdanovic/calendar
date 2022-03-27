import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

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
  thisMonthIndex = this.date.getMonth() + 1;
  thisMonth = this.monthNames[this.thisMonthIndex - 1];
  thisYear = this.date.getFullYear();
  daysInMonthNumber = new Date(this.thisYear, this.thisMonthIndex, 0).getDate();
  firstday = new Date(
    this.date.setDate(this.date.getDate() - this.date.getDay())
  );

  constructor() {}

  ngOnInit(): void {
    this.createDays();
  }

  nextMonth() {
    if (this.thisMonthIndex === 12) {
      this.thisMonthIndex = 1;
      this.thisYear++;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
      this.daysInMonthNumber = new Date(
        this.thisYear,
        this.thisMonthIndex,
        0
      ).getDate();
      this.createDays();
    } else {
      this.thisMonthIndex = this.thisMonthIndex + 1;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
      this.daysInMonthNumber = new Date(
        this.thisYear,
        this.thisMonthIndex,
        0
      ).getDate();
      this.createDays();
    }
  }
  prevMonth() {
    if (this.thisMonthIndex === 1) {
      this.thisMonthIndex = 12;
      this.thisYear--;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
      this.daysInMonthNumber = new Date(
        this.thisYear,
        this.thisMonthIndex,
        0
      ).getDate();
      this.createDays();
    } else {
      this.thisMonthIndex = this.thisMonthIndex - 1;
      this.thisMonth = this.monthNames[this.thisMonthIndex - 1];
      this.daysInMonthNumber = new Date(
        this.thisYear,
        this.thisMonthIndex,
        0
      ).getDate();
      this.createDays();
    }
  }
  createDays() {
    this.daysInMonth = [];
    let firstDay = new Date(this.thisYear, this.thisMonthIndex, 1)
      .toDateString()
      .slice(0, 3);

    for (let i = 1; i < this.daysInMonthNumber; i++) {
      this.daysInMonth.push(i);
    }
    if (this.daysNames.indexOf(firstDay) > 0) {
      this.daysInMonth = [
        ...Array(this.daysNames.indexOf(firstDay)),
        ...this.daysInMonth,
      ];
    }
  }
}
