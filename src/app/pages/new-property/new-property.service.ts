import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class NewPropertyService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }
  
  newPatent(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/patent/newPatent`, Data);
  }

  newSoftware(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/software/newSoftware`, Data);
  }

  newTrademark(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/trademark/newTrademark`, Data);
  }

}
