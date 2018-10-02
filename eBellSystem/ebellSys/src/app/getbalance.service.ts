import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBalance } from './balance'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetbalanceService {
  private _url: string = "https://api.myjson.com/bins/fimts";
  constructor(private http: HttpClient) { }
  getBalance(): Observable<IBalance[]> {
    return this.http.get<IBalance[]>(this._url);
  }

}






