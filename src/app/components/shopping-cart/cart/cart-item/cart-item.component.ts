import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: '[cart-item,app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Input() hideCrossButton: any
  @Output() removingCartItem: EventEmitter<number> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem(cartItem){
    this.removingCartItem.emit(cartItem);
  }

}
