import { Injectable } from '@angular/core';

import { Year } from './year';
import { YEARS } from './years-mock';

@Injectable()
export class YearsService {

  getYears(): Promise<Year[]> {
    return Promise.resolve(YEARS);
  }

  constructor() { }

}
