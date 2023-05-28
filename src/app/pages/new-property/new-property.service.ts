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
  
  newData(Data: object) {
    return this.httpClient.post(`${apiUrl}/user/addUser`, Data);
  }

}
