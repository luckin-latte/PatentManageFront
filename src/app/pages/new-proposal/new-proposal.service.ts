import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class NewProposalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  submit() {
    // return this.httpClient.post(`${apiUrl}/proposal/post`);
  }
}