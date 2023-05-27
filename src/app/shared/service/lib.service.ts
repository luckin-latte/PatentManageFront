import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }
  
  // 获取编号
  public getCode(xData: string): Observable<any> {
    return this.httpClient.get(`${apiUrl}/proposal/getCode?typeName=${xData}`);
  }

}
