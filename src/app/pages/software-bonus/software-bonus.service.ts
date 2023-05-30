import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class SoftwareBonusService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any>{
    return this.httpClient.post(`${apiUrl}/software/getSoftwareBonusList`, queryInfo)
  }

  newData(Data: object) {
    return this.httpClient.post(`${apiUrl}/software/newBonus`, Data);
  }
  
  updateData(params: object) {
    return this.httpClient.post(`${apiUrl}/software/updateBonus`, params);
  }

  deleteAgency(id: string): Observable<any>{
    return this.httpClient.delete(`${apiUrl}/software/deleteBonus/${id}`);
  }
}
