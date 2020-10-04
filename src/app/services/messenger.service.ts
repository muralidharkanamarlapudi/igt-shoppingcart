import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  private navChangeEvent$ = new BehaviorSubject<string>(null);
  getNavSelection = this.navChangeEvent$.asObservable();
  private cartTotalEvent$ = new BehaviorSubject<Number>(0);
  cartItemsCount = this.cartTotalEvent$.asObservable();
  private cartTotalObj$ = new BehaviorSubject<any>(null);
  cartItems = this.cartTotalObj$.asObservable();
  private filterInput$ = new BehaviorSubject<any>(null);
  getFilterInput = this.filterInput$.asObservable();

  constructor() { }

  setfilterInput(data: any){
    this.filterInput$.next(data);
  }
  setCartItemsCount(data: number){
    this.cartTotalEvent$.next(data);
  }
  setCartItems(data: any){
    this.cartTotalObj$.next(data);
  }
  setNavSelection(data: string) {
    this.navChangeEvent$.next(data);
  }

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }


}
