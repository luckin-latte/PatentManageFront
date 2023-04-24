import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginRequest } from '../../shared/model/login';
import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(loginRequest: LoginRequest) {
    return this.httpClient.post(`${apiUrl}/user/login`, loginRequest);
  }

}
