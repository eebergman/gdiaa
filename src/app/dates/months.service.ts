import { Injectable } from '@angular/core';

import { Months } from './months';
import { MONTHS } from './months-mock';

@Injectable()
export class MonthsService {

  getMonths(): Promise<Months[]> {
    return Promise.resolve(MONTHS);
  }

  constructor() { }

}
