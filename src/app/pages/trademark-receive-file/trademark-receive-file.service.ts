import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TrademarkReceiveFileService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  fetchData(queryInfo: object): Observable<any>{
    const query = JSON.stringify(queryInfo);
    return this.httpClient.get(`${apiUrl}/trademark/getFileList?value=${query}`)
  }
  
  submit() {
    // return this.httpClient.post(`${apiUrl}/proposal/post`);
  }
}