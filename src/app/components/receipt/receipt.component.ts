import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  totalItems = [];
  recieptNumber :number;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.cartItems.subscribe(res=> this.totalItems = res);
    this.recieptNumber = Math.floor(10000000 + Math.random() * 90000000);
  }

}
