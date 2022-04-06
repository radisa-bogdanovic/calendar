import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  daysNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
  daysInMonth: number[] = [];
  daysInBeforeMonth: number[] = [];
  daysFromNextMonth: number[] = [];
  date = new Date();
  monthIndex = this.date.getMonth() + 1;
  month = this.monthNames[this.monthIndex - 1];
  year = this.date.getFullYear();
  daysInMonthNumber = new Date(this.year, this.monthIndex, 0).getDate();
  daysInBeforeMonthNumber = new Date(
    this.year,
    this.monthIndex - 1,
    0
  ).getDate();
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
      this.wrapperFunction();
    } else {
      this.monthIndex = this.monthIndex + 1;
      this.wrapperFunction();
    }
  }
  prevMonth() {
    if (this.monthIndex === 1) {
      this.monthIndex = 12;
      this.year--;
      this.wrapperFunction();
    } else {
      this.monthIndex = this.monthIndex - 1;
      this.wrapperFunction();
    }
  }
  prevYear() {
    this.year--;
    this.wrapperFunction();
  }
  nextYear() {
    this.year++;
    this.wrapperFunction();
  }
  createDays() {
    this.daysInMonth = [];
    this.daysInBeforeMonth = [];
    this.daysFromNextMonth = [];
    let firstDay = new Date(this.year, this.monthIndex - 1, 1)
      .toDateString()
      .slice(0, 3);

    for (let i = 1; i <= this.daysInMonthNumber; i++) {
      this.daysInMonth.push(i);
    }
    for (let i = 1; i <= this.daysInBeforeMonthNumber; i++) {
      this.daysInBeforeMonth.push(i);
    }

    if (this.daysNames.indexOf(firstDay) != 0) {
      this.daysInBeforeMonth = [
        ...this.daysInBeforeMonth.slice(-this.daysNames.indexOf(firstDay)),
      ];
    } else {
      this.daysInBeforeMonth = [...this.daysInBeforeMonth.slice(-7)];
    }
    this.daysFromNextMonth = [
      ...Array.from(
        {
          length:
            42 - (this.daysInMonth.length + this.daysInBeforeMonth.length),
        },
        (_, i) => i + 1
      ),
    ];
    this.daysFromNextMonth.slice(0, 1);
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

  dayInMonthBeforeNumber() {
    return (this.daysInBeforeMonthNumber = new Date(
      this.year,
      this.monthIndex - 1,
      0
    ).getDate());
  }
  wrapperFunction() {
    this.getMonth();
    this.dayInMonthNumber();
    this.dayInMonthBeforeNumber();
    this.createDays();
  }
}
