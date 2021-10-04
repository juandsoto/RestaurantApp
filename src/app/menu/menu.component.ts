import {Component, OnInit} from '@angular/core';

import data from '../../assets/json/db.json';
import {Checkout, Product} from '../interfaces/interfaces';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products!: Product[];
  checkout!: Checkout;
  start: number = 0;
  end: number = 12;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = data.products;
    this.cartService.checkout.subscribe(checkout => {
      this.checkout = checkout;
    });
  }

  changePage(page: number) {
    switch(page) {
      case 1: {
        this.start = 0;
        this.end = 12;
        break;
      }
      case 2: {
        this.start = 12;
        this.end = 24;
        break;
      }
      case 3: {
        this.start = 24;
        this.end = 37;
        break;
      }
      default: {
        break;
      }
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
