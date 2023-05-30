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

  // 下拉框获取所有部门名称
  public getAllDepartments(): Observable<any> {
    return this.httpClient.get(`${apiUrl}/proposal/getAllDepartments`);
  }

  // 下拉框获取所有角色
  public getAllRoles(): Observable<any> {
    return this.httpClient.get(`${apiUrl}/user/getRoleList`);
  }

  // 下拉框获取所有权限
  public getAllPermission(): Observable<any> {
    return this.httpClient.get(`${apiUrl}/user/getPermissionList`);
  }

  // 下拉框获取所有代理机构
  public getAllAgency(): Observable<any> {
    return this.httpClient.get(`${apiUrl}/agency/getAgencyList`);
  }
}
