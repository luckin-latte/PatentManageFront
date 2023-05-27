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
    return this.httpClient.post(`${apiUrl}/agency/getList`, queryInfo);
  }

  newData(Data: object) {
    return this.httpClient.post(`${apiUrl}/agency/newAgency`, Data);
  }

  updateData(params: object) {
    return this.httpClient.patch(`${apiUrl}/agency/updateAgency`, params);
  }

  deleteAgency(agencyCode: string): Observable<any>{
    return this.httpClient.delete(`${apiUrl}/agency/deleteAgency/${agencyCode}`);
  }
}
