import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

interface CartItem {
  product: any;
  quantity: number;
  added?: boolean;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cart: CartItem[] = [];

  get total() {
    return this.cart.reduce((sum, item) => {
      const priceNumber = Number(item.product.price.replace(/[^0-9.-]+/g, ''));
      return sum + priceNumber * item.quantity;
    }, 0);
  }

  constructor(public cartService: CartService) {}


  increment(item: CartItem) {
    item.quantity++;
    this.triggerPop(item);
  }

  decrement(item: CartItem) {
    if(item.quantity > 1) {
      item.quantity--;
      this.triggerPop(item);
    }
  }
  remove(item: CartItem) {
  this.cart = this.cart.filter(i => i !== item);
  this.cartService.removeFromCart(item.product.id);
}
  addProduct(product: any) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if(existing) {
      this.increment(existing);
    } else {
      this.cart.push({ product, quantity: 1, added: true });
      setTimeout(() => (existing!.added = false), 300);
    }
  }

  triggerPop(item: CartItem) {
    item.added = true;
    setTimeout(() => (item.added = false), 200);
  }
    isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

