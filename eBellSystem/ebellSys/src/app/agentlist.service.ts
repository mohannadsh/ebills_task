import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAgent } from './agents';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AgentlistService {
  private _url: string = "https://api.myjson.com/bins/8axag";

  constructor(private http: HttpClient) { }
  getAgents(): Observable<any> {
    return this.http.get(this._url);


  }

}

