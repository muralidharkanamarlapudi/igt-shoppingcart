import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0
  showCart :boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.msg.getNavSelection.subscribe(res=>{
      if(res === "showCart"){
        this.showCart = true;
      }
    })
  }

  cartItemRemoved(removingItem : Product){
    console.log(removingItem)
    this.cartItems = this.cartItems.filter(res=> res.id !== removingItem.id);
    this.msg.setCartItemsCount(this.cartItems.length)
    this. calcCartTotal();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      //this.loadCartItems();
      this.cartItems.push({
        id:this.cartItems.length,
        productName: product.name,
        qty:1,
        price: product.price,
        image : product.image
      })
      this. calcCartTotal();
      this.msg.setCartItemsCount(this.cartItems.length)
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  cartCheckout(){
    this.msg.setCartItems(this.cartItems);
    this.router.navigate(['/playerReciept']);
  }
}
