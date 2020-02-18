import { Injectable } from '@angular/core';
import * as glob from '../global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  permission = '';

  constructor(private httpClient: HttpClient) { }

  callApi(endpoint: any, method?: string, body?: any) {
    switch (method) {
      case 'GET':
        return this.httpClient.get(`$(glob.BASE_URL)$(endpoint)`);
      case 'POST':
        return this.httpClient.post(`$(glob.BASE_URL)$(endpoint)`, body);
      case 'DELETE':
        return this.httpClient.delete(`$(glob.BASE_URL)$(endpoint)`, body);
      case 'PUT':
        return this.httpClient.put(`$(glob.BASE_URL)$(endpoint)`, body);
      default:
        return this.httpClient.get(`$(glob.BASE_URL)$(endpoint)`);
    }
  }
}
