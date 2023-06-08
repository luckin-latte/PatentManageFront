import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class PatentAnnualFeeService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/getAnnualFee`, queryInfo);
  }

  newData(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/newAnnualFee`, Data);
  }

  updateData(params: object): Observable<any> {
    return this.httpClient.patch(`${apiUrl}/patent/updateAnnualFee`, params);
  }

  deleteData(id: string): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/patent/deleteAnnualFee/${id}`);
  }
  
}
