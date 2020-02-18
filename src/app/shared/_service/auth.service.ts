import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as glob from '../global';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public permissison: string;

    constructor (private httpClient: HttpClient) {}

    logout() {
        return this.httpClient.post<any>(glob.BASE_URL + 'intelisys/logout', {}, {observe: 'response'});
    }
}
