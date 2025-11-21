import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  category: 'panel' | 'battery' | 'inverter' | 'accessory';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-accessoires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.scss']
})
export class AccessoiresComponent {
  // Liste des produits accessoires
  products: Product[] = [
    {
      id: 1,
      category: 'accessory',
      title: 'Câble HDMI 2m',
      description: 'Câble haute qualité pour vos appareils électroniques.',
      price: '12 €',
      image: 'https://via.placeholder.com/300x200?text=Câble+HDMI'
    },
    {
      id: 2,
      category: 'accessory',
      title: 'Support mural caméra',
      description: 'Fixation solide pour caméra de surveillance.',
      price: '25 €',
      image: 'https://via.placeholder.com/300x200?text=Support+Mural'
    },
    {
      id: 3,
      category: 'accessory',
      title: 'Multiprise 6 prises',
      description: 'Multiprise sécurisée avec protection surtension.',
      price: '18 €',
      image: 'https://via.placeholder.com/300x200?text=Multiprise'
    },
    {
      id: 4,
      category: 'accessory',
      title: 'Kit de fixation universel',
      description: 'Vis et supports pour toutes vos installations.',
      price: '15 €',
      image: 'https://via.placeholder.com/300x200?text=Kit+Fixation'
    }
  ];

  // Filtres et recherche
  filter: 'panel' | 'battery' | 'inverter' | 'accessory' | 'all' = 'all';
  query: string = '';

  // Produit sélectionné pour le modal
  selectedProduct: Product | null = null;

  // Retourne les produits visibles selon le filtre et la recherche
  get visibleProducts(): Product[] {
    return this.products.filter(p => 
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // Ouvre le modal avec un produit
  openDetail(product: Product) {
    this.selectedProduct = product;
  }

  // Ferme le modal
  closeDetail() {
    this.selectedProduct = null;
  }

  // Optionnel : pour l'animation des cartes
  delayForIndex(index: number): string {
    return `${index * 100}ms`;
  }
}
