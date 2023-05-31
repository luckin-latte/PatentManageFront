import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TrademarkFileService {
  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getList(queryInfo: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/trademark/getFileList`, queryInfo);
  }

  newData(Data: object): Observable<any> {
    return this.httpClient.post(`${apiUrl}/trademark/newFileInfo`, Data);
  }

  deleteData(id: string): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/trademark/deleteFile/${id}`);
  }
  
}
