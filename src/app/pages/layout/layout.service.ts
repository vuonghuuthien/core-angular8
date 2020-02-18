import { Injectable } from '@angular/core';
import { ShareService } from '@shared/shareModule/share.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private shareSerivce: ShareService) { }

}
