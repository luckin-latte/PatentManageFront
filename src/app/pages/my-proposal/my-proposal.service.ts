import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class MyProposalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    const token = sessionStorage.getItem('token')
    return this.httpClient.get(`${apiUrl}/proposal/getProposalList1`, {
      headers: {
        // Authorization: `Bearer ${token}`
        Authorization: `${token}`
      }
    })
  }
}
