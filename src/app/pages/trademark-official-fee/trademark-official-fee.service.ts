import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TrademarkOfficialFeeService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/trademark/getOfficialFeeList`, queryInfo);
  }

  newData(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/trademark/newOfficialFee`, Data);
  }

  updateData(params: object): Observable<any> {
    return this.httpClient.patch(`${apiUrl}/trademark/updateOfficialFee`, params);
  }

  deleteData(id: string): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/trademark/deleteOfficialFee/${id}`);
  }
  
}
