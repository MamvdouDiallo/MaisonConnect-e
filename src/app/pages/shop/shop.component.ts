import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../shared/services/cart.service';

interface Product {
  id: number;
  category: 'securite' | 'domotique' | 'energie' | 'packs' | 'accessory';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,FormsModule,CartComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  filter: string = 'all';
  query: string = '';
  // cart: Product[] = [];
  selectedProduct?: Product;

    constructor(public cartService: CartService) {}

  products: Product[] = [
    {
      id: 1,
      category: 'securite',
      title: 'Caméra HD',
      description: 'Caméra de sécurité haute définition pour la surveillance intérieure et extérieure.',
      price: '120 €',
      image: 'https://m.media-amazon.com/images/I/61UdvzT1k-L._AC_SL1500_.jpg',
      highlights: ['HD 1080p', 'Vision nocturne', 'Résistant aux intempéries'],
      specs: { Marque: 'SecureCam', Connexion: 'WiFi', Garantie: '2 ans' },
      link: '#'
    },
    {
      id: 2,
      category: 'domotique',
      title: 'Assistant Vocal',
      description: 'Contrôlez votre maison avec votre voix et automatisez vos routines.',
      price: '80 €',
      image: 'https://images.unsplash.com/photo-1597764699961-59c1cfb0e80c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Contrôle vocal', 'Compatibilité multi-appareils', 'Mises à jour automatiques'],
      specs: { Marque: 'HomeAI', Connectivité: 'WiFi', Langue: 'FR' },
      link: '#'
    },
    {
      id: 3,
      category: 'energie',
      title: 'Panneau Solaire 100W',
      description: 'Panneau solaire autonome pour alimentation d’appareils et recharge de batteries.',
      price: '150 €',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1800',
      highlights: ['100W', 'Polycristallin', 'Résistant aux UV'],
      specs: { Marque: 'SolarTech', Tension: '12V', Garantie: '5 ans' },
      link: '#'
    },
    {
      id: 4,
      category: 'packs',
      title: 'Pack Domotique Complet',
      description: 'Kit complet pour automatiser votre maison dès l’installation.',
      price: '350 €',
      image: 'https://images.unsplash.com/photo-1597764699961-59c1cfb0e80c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Assistant vocal', 'Caméra', 'Capteurs de mouvement'],
      specs: { Marque: 'SmartHome', NombreAppareils: '10', Garantie: '3 ans' },
      link: '#'
    },
    {
      id: 5,
      category: 'accessory',
      title: 'Batterie de Secours',
      description: 'Batterie externe pour vos équipements solaires et domotiques.',
      price: '50 €',
      image: 'https://images.unsplash.com/photo-1606813902035-38f383f0d4e6?auto=format&fit=crop&w=800&q=80',
      highlights: ['10000 mAh', 'Charge rapide', 'Compact'],
      specs: { Marque: 'PowerX', Type: 'Li-ion', Garantie: '1 an' },
      link: '#'
    },
  ];

  get visibleProducts() {
    return this.products.filter(p =>
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // addToCart(product: Product) {
  //   this.cart.push(product);
  // }

  // removeFromCart(product: Product) {
  //   this.cart = this.cart.filter(p => p.id !== product.id);
  // }

  openDetail(product: Product) {
    this.selectedProduct = product;
  }

  closeDetail() {
    this.selectedProduct = undefined;
  }

  delayForIndex(i: number) {
    return `${i * 100}ms`;
  }


    cart: { product: Product, quantity: number }[] = [];

    addToCart(product: any) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if(existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
        this.cartService.addToCart(product);

  }

}
