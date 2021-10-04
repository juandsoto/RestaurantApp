import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/interfaces';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = this.cartService.getProducts;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const products: Product[] = JSON.parse(localStorage.getItem('cart')!);
    if(products) {
      products.forEach(product => this.cartService.addProduct(product));
    }
  }

  getTotal(): number {
    let total = 0;
    this.products.forEach(({price, quantity}) => total += (price * quantity!));
    return total;
  }

  addQty(product: Product): void {
    product.quantity! += 1;
    this.save();
  }

  substractQty(product: Product): void {
    if(product.quantity! > 1) {
      product.quantity! -= 1;
      this.save();
    }
  }

  deleteProduct(id: number) {
    this.products.splice(this.products.findIndex(product => product.id === id), 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  save(): void {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  checkout(): void {
    this.cartService.checkout.emit({
      products: this.products,
      total: this.getTotal()
    });
  }


}
