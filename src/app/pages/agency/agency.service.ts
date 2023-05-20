import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchData() {
    this.httpClient.get(`${apiUrl}/agency/getAgency`)
  }
  
  submit() {
    // return this.httpClient.post(`${apiUrl}/proposal/post`);
  }
}
