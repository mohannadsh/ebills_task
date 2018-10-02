import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import { finalize } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private _url = 'http://demo3825547.mockable.io/ebills/pay/';
  constructor(private _http: HttpClient) { }

  pay(user: User) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
