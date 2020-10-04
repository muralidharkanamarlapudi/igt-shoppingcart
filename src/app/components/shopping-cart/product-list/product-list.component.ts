import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  originalProductsList: Product[] = []

  constructor(
    private productService: ProductService,
    private msg: MessengerService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.msg.getNavSelection.subscribe(res=>{
      if(res === null || res === "ALL" || res === "showCart"){
        this.productList = this.originalProductsList  
      }else{
        this.productList = this.originalProductsList.filter(productObj=> !productObj.category.indexOf(res) )
      }
    })
    this.msg.getFilterInput.subscribe(filterInput=>{
      console.log(filterInput);
      if(filterInput === 'lowToHigh'){
        this.productList = this.productList.sort(function (a, b) {
          return a.price - b.price;
        });
      }else{
        this.productList = this.productList.sort(function (a, b) {
          return b.price - a.price;
        });
      }
    })
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.originalProductsList = this.productList = products;
    })
  }
}
