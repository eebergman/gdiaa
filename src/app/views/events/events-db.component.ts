import { Component, OnInit } from '@angular/core';

import { Year } from '../../dates/year';
import { YearsService } from '../../dates/years.service';
import { Months } from '../../dates/months';
import { MonthsService } from '../../dates/months.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-events',
  templateUrl: './events-db.component.html',
})
export class EventsDBComponent implements OnInit {
  classes: FirebaseListObservable<any[]>;
  years: Year[];
  months: Months[];

  constructor(angularFire: AngularFire, private yearsService: YearsService, private monthsService: MonthsService) {
    this.classes = angularFire.database.list('/classes');
  }

  getYears(): void {
    this.yearsService.getYears().then(years => this.years = years);
  }

  getMonths(): void {
    this.monthsService.getMonths().then(months => this.months = months);
  }

  ngOnInit() {
    this.getYears();
    this.getMonths();
  }

}
