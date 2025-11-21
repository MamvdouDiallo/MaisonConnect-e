import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  category: 'light' | 'sensor' | 'automation';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-domotique',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './domotique.component.html',
  styleUrl: './domotique.component.scss'
})
export class DomotiqueComponent {
  // Parallax
  bgOffset = 0;

  // Filtre
  filter: 'all' | Product['category'] = 'all';

  selectedProduct: Product | null = null;

  // Produits domotiques
  products: Product[] = [
    {
      id: 1,
      category: 'light',
      title: `Ampoule LED Intelligente RGB`,
      description: `Contrôlez la couleur, la luminosité et les ambiances via smartphone ou assistant vocal.`,
      price: '12 000 FCFA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30Z5mH_iPr0Qutox3hAuufxq1gGW6fHlYXw&s',
      link: '#',
      highlights: ['16 millions de couleurs', 'Contrôle à distance', 'Scénarios lumineux'],
      specs: {
        'Connexion': 'Wi-Fi',
        'Durée de vie': '25 000h',
        'Compatibilité': 'Google / Alexa'
      }
    },
    {
      id: 2,
      category: 'sensor',
      title: `Capteur de Mouvement Intelligent`,
      description: `Active automatiquement vos lumières ou déclenche une alerte en cas de mouvement.`,
      price: '18 500 FCFA',
      image: 'https://www.aqara.com/us/wp-content/uploads/2023/05/motion_sensor_p1_2.png',
      link: '#',
      highlights: ['Haute sensibilité', 'Automatisations', 'Basse consommation'],
      specs: {
        'Angle': '170°',
        'Autonomie': '2 ans',
        'Technologie': 'Zigbee 3.0'
      }
    },
    {
      id: 3,
      category: 'automation',
      title: `Prise Connectée Wi-Fi`,
      description: `Contrôlez vos appareils à distance, mesurez la consommation et planifiez des routines.`,
      price: '9 500 FCFA',
      image: 'https://i.ebayimg.com/images/g/FJkAAOSw5mNb~Lbs/s-l1200.webp',
      link: '#',
      highlights: ['Programmation', 'Suivi énergie', 'Mode absence'],
      specs: {
        'Puissance': '2300W max',
        'Application': 'Mobile / Cloud',
        'Compatibilité': 'Alexa / Google'
      }
    },
    {
      id: 4,
      category: 'light',
      title: `Bande LED RGBIC Intelligente`,
      description: `Idéal pour salon, chambre, TV ou éclairage d’ambiance.`,
      price: '20 000 FCFA',
      image: 'https://m.media-amazon.com/images/I/71nSpbSOi0L._AC_SL1500_.jpg',
      link: '#',
      highlights: ['Effets dynamiques', 'Synchronisation musicale', 'Découpe possible'],
      specs: {
        'Longueur': '5m',
        'Connexion': 'Wi-Fi',
        'Type LED': 'RGBIC'
      }
    },
    {
      id: 5,
      category: 'sensor',
      title: `Capteur d’Ouverture Portes/Fenêtres`,
      description: `Recevez une alerte instantanée dès qu’une porte ou fenêtre s’ouvre.`,
      price: '7 000 FCFA',
      image: 'https://m.media-amazon.com/images/I/51W6iZVYphL._AC_SL1500_.jpg',
      link: '#',
      highlights: ['Ultra compact', 'Alerte en temps réel', 'Automatisation'],
      specs: {
        'Autonomie': '2 ans',
        'Technologie': 'Zigbee',
        'Fixation': 'Adhésif'
      }
    }
  ];

  get visibleProducts(): Product[] {
    return this.filter === 'all'
      ? this.products
      : this.products.filter(p => p.category === this.filter);
  }

  openDetail(p: Product) {
    this.selectedProduct = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sc = window.scrollY || window.pageYOffset;
    this.bgOffset = sc * 0.25;
    (document.documentElement as any).style.setProperty('--bg-offset', `${this.bgOffset}px`);
  }

  delayForIndex(i: number) {
    return `${0.06 * i}s`;
  }
}
