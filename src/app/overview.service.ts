import { Injectable } from '@angular/core';
import { FinancialEntry } from './financial-entry';
import { Observable, of } from 'rxjs';
import { ENTRIES } from './mock-financial-entries';
@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor() { }
  getEntries(): Observable<FinancialEntry[]> {
    const allEntries = of(ENTRIES);
    return allEntries;
  }
}
