import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any>{
    return this.httpClient.post(`${apiUrl}/bill/getBill`, queryInfo);
  }

  newData(Data: object) {
    return this.httpClient.post(`${apiUrl}/bill/newBill`, Data);
  }

  updateData(params: object) {
    return this.httpClient.patch(`${apiUrl}/bill/updateBill`, params);
  }

  deleteData(id: string): Observable<any>{
    return this.httpClient.delete(`${apiUrl}/bill/deleteBill/${id}`);
  }
  
}
