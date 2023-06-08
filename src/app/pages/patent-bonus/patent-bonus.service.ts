import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class PatentBonusService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/getBonusList`, queryInfo);
  }

  newData(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/newBonus`, Data);
  }

  updateData(params: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/updateBonus`, params);
  }

  deleteData(id: string): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/patent/deleteBonus/${id}`);
  }
  
}
