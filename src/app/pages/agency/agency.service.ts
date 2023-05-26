import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any>{
    return this.httpClient.get(`${apiUrl}/agency/getAgency`, {
      params: { queryInfo: JSON.stringify(queryInfo) }
    });
  }

  
  
  submit() {
    // return this.httpClient.post(`${apiUrl}/proposal/post`);
  }
}
