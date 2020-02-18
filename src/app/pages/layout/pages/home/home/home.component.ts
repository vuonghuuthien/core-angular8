import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{
  private subscriptions: Array<Subscription> = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // localStorage.setItem("jwtToken2","dfdfdfd");
    this.getVideo();
  }
  getVideo(){
    const _sub  = this.homeService.getVideoHomeService().subscribe(res=>{
      console.log(res)
    })
    this.subscriptions.push(_sub);
  }
  
  ngOnDestroy(){
    this.subscriptions.forEach(item=>{
      item.unsubscribe()
    })
  }
}
