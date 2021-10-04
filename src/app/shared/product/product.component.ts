import {Component, Input, OnInit} from '@angular/core';
import {CartService} from 'src/app/cart.service';
import {Product} from '../../interfaces/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  quantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.quantity = this.product.quantity ? this.product.quantity : 0;
  }

  substractQty(): void {
    if(this.quantity > 0)
      this.quantity -= 1;
  }

  addQty(): void {
    this.quantity += 1;
  }

  addToCart(): void {
    const product = this.product;
    product.quantity = this.quantity;
    this.cartService.addProduct(product);
    this.quantity = 0;
  }

}
