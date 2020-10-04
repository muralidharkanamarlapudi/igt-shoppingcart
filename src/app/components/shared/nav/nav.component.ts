import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartItemsCount: Number;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.cartItemsCount.subscribe(res=> this.cartItemsCount = res);
  }
  
  navSelection(navSelection){
    this.msg.setNavSelection(navSelection);
  }

}
