import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TrademarkBonusService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  fetchData(queryInfo: object): Observable<any>{
    const query = JSON.stringify(queryInfo);
    return this.httpClient.get(`${apiUrl}/trademark/getBonus?value=${query}`)
  }
  
  submit() {
    // return this.httpClient.post(`${apiUrl}/proposal/post`);
  }
}
