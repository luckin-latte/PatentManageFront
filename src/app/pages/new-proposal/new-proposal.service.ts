import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class NewProposalService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }
  
  newData(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/proposal/post`, Data);
  }

}
