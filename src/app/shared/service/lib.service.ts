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
  public getCode(xData: any): Observable<any> {
    const mSaveData = new Object();
    // mSaveData['queryCdtn'] = xData;

    LibService.pmsConsole(
      'callQueryService-LibServer-getCode-data: ',
      mSaveData
    );
    return this.httpClient.post('restful/service/pms/PmsLibServer/getMaxCode', mSaveData);
  }

  public static pmsConsole(message?: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }
}
