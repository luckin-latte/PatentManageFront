import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class SoftwareOfficialFeeService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any>{
    return this.httpClient.post(`${apiUrl}/user/getUser`, queryInfo);
  }

  newData(Data: object) {
    return this.httpClient.post(`${apiUrl}/user/addUser`, Data);
  }

  updateData(params: object) {
    return this.httpClient.patch(`${apiUrl}/user/updateUser`, params);
  }

  deleteData(userCode: string): Observable<any>{
    return this.httpClient.delete(`${apiUrl}/user/deleteUser/${userCode}`);
  }
  
}
