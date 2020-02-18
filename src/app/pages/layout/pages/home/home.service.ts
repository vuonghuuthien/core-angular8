import { Injectable } from '@angular/core';
import { ShareService } from '@shared/shareModule/share.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private shareService: ShareService) { }
// get video in home
  getVideoHomeService():Observable<any> {
    return this.shareService.callApi("/client/home", "GET");
  }
  
  getAllProductService():Observable<any> {
    return this.shareService.callApi("/client/home", "GET");
  }

}
