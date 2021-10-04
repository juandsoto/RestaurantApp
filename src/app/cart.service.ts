import {Injectable, EventEmitter, Output} from '@angular/core';
import {Checkout, Product} from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products: Product[] = [];

  @Output() checkout: EventEmitter<Checkout> = new EventEmitter<Checkout>();

  get getProducts(): Product[] {
    return this._products;
  }

  constructor() { }

  addProduct(product: Product): void {
    if(this._products.some(({id}) => product.id === id)) {
      localStorage.setItem('cart', JSON.stringify(this._products));
      return;
    }
    this._products.push(product);
    localStorage.setItem('cart', JSON.stringify(this._products));
  }

  clearCart(): void {
    localStorage.removeItem('cart');
    this._products = [];
  }

}
