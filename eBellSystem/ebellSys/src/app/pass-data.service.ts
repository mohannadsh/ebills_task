import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  balance = new Subject<number>();
  bills = new Subject<number>();
  name = new Subject<string>();

  obal = this.balance.asObservable();
  obill = this.bills.asObservable();
  oname = this.name.asObservable();
  constructor() { }

  changeVal(bal: number, bill: number, n: string) {
    this.balance.next(bal);
    this.bills.next(bill);
    this.name.next(n);
  }
}
