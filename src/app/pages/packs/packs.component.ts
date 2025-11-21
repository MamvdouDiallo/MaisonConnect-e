import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  category: 'starter' | 'pro' | 'premium';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent {
  filter: 'all' | 'starter' | 'pro' | 'premium' = 'all';
  query: string = '';
  selectedPack?: Product;

  packs: Product[] = [
    {
      id: 1,
      category: 'starter',
      title: 'Pack Starter',
      description: 'Idéal pour une petite installation, avec les essentiels.',
      price: '299€',
      image: 'https://via.placeholder.com/300x200?text=Pack+Starter',
      highlights: ['Panneau solaire 100W', 'Batterie 50Ah', 'Onduleur 300W'],
      specs: { 'Nombre de panneaux': '1', 'Capacité batterie': '50Ah', 'Puissance onduleur': '300W' },
      link: '#'
    },
    {
      id: 2,
      category: 'pro',
      title: 'Pack Pro',
      description: 'Pour une installation complète avec plus d’autonomie.',
      price: '699€',
      image: 'https://via.placeholder.com/300x200?text=Pack+Pro',
      highlights: ['Panneau solaire 300W', 'Batterie 150Ah', 'Onduleur 1000W'],
      specs: { 'Nombre de panneaux': '3', 'Capacité batterie': '150Ah', 'Puissance onduleur': '1000W' },
      link: '#'
    },
    {
      id: 3,
      category: 'premium',
      title: 'Pack Premium',
      description: 'Solution haut de gamme pour grande autonomie et performance.',
      price: '1299€',
      image: 'https://via.placeholder.com/300x200?text=Pack+Premium',
      highlights: ['Panneau solaire 500W', 'Batterie 300Ah', 'Onduleur 2000W'],
      specs: { 'Nombre de panneaux': '5', 'Capacité batterie': '300Ah', 'Puissance onduleur': '2000W' },
      link: '#'
    }
  ];

  // Liste filtrée et recherchée
  get visiblePacks() {
    return this.packs.filter(p =>
      (this.filter === 'all' || p.category === this.filter) &&
      (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
    );
  }

  // Animation delay pour les cartes
  delayForIndex(index: number) {
    return `${index * 100}ms`;
  }

  openDetail(pack: Product) {
    this.selectedPack = pack;
  }

  closeDetail() {
    this.selectedPack = undefined;
  }
}

