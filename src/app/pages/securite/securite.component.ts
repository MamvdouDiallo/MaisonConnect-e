import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  category: 'camera' | 'alarm' | 'nvr';
  title: string;
  description: string;
  price: string;
  image: string;
  link?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

@Component({
  selector: 'app-securite',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './securite.component.html',
  styleUrl: './securite.component.scss'
})
export class SecuriteComponent {
  // Parallax / background reactive values
  bgOffset = 0;

  // Filtre
  filter: 'all' | Product['category'] = 'all';

  // Modal / detail
  selectedProduct: Product | null = null;

  // Liste des produits (mock, remplacera par backend plus tard)
  products: Product[] = [
    {
      id: 1,
      category: 'camera',
      title: `Caméra Wi-Fi 1080p — Vision Nocturne`,
      description: `Caméra intérieure/extérieure, audio bidirectionnel et détection de mouvement intelligente.`,
      price: '29 000 FCFA',
      image: 'https://www.google.com/imgres?q=Cam%C3%A9ra%20Wi-Fi%201080p%20%E2%80%94%20Vision%20Nocturne&imgurl=https%3A%2F%2Fwww.anyrec.io%2Fimages%2F2022%2F03%2Fprosia-hidden-camera-with-audio.jpg&imgrefurl=https%3A%2F%2Fwww.agrofor.info%2Fdiscr-te-Enregistrement-Audio-vid-o-HD-Vision-Nocturne-D-391517%2F&docid=FW-OdVRRmlBUGM&tbnid=we0ti5KpjHjztM&vet=12ahUKEwidj-qN14GRAxVGAPsDHTGtEXoQM3oECEYQAA..i&w=600&h=400&hcb=2&itg=1&ved=2ahUKEwidj-qN14GRAxVGAPsDHTGtEXoQM3oECEYQAA',
      link: 'https://www.amazon.com/dp/B08XYZEXAMPLE',
      highlights: [`Vision nocturne`, `Audio bidirectionnel`, `App mobile`],
      specs: { 'Résolution': '1080p', 'Connexion': 'Wi-Fi', 'Étanchéité': 'IP65' }
    },
    {
      id: 2,
      category: 'camera',
      title: `Caméra PTZ Motorisée 4K`,
      description: `Rotation 360°, zoom optique, idéale pour surveillance extérieur/industriel.`,
      price: '150 000 FCFA',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allwan.eu%2Ffr%2Fdome-ptz%2F323-ds-2df8836i5x-ael-dome-ptz-4k-ir-500m.html&psig=AOvVaw3Y1vgJ7GCNLp21TUzQn1LR&ust=1763760767408000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCP44LXgZEDFQAAAAAdAAAAABAE',
      link: 'https://www.amazon.com/dp/B07EXAMPLEPTZ',
      highlights: [`Zoom optique`, `PTZ 360°`, `Contrôle mobile`],
      specs: { 'Résolution': '4K', 'Zoom': '20x optique', 'Alimentation': 'PoE / 12V' }
    },
    {
      id: 3,
      category: 'alarm',
      title: `Kit Alarme Sans Fil Maison`,
      description: `Détecteurs d'ouverture, capteurs de mouvement et sirène 120 dB.`,
      price: '89 000 FCFA',
      image: 'https://sugunii.com/wp-content/uploads/2025/02/Systeme-d-alarme-de-securite-Hikvision-AX-Pro-2.jpg?v=1746537363',
      link: 'https://www.amazon.com/dp/B07ALARMEXAMPLE',
      highlights: [`Installation facile`, `Sirène 120dB`, `Notifications mobile`],
      specs: { 'Détecteurs inclus': '3 portes + 1 mouvement', 'Autonomie': '2 ans', 'Compatibilité': 'Wi-Fi' }
    },
    {
      id: 4,
      category: 'nvr',
      title: `Enregistreur NVR 8 canaux`,
      description: `Supporte caméras IP jusqu'à 5MP, accès distant et stockage sécurisé.`,
      price: '110 000 FCFA',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usinenouvelle.com%2Fexpo%2Fenregistreur-nvr-8-canaux-linux-hdmi-pla-p51244118.html&psig=AOvVaw0XfgfSEOLPi_PHEVacoQvz&ust=1763760815623000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiilZnXgZEDFQAAAAAdAAAAABAE',
      link: 'https://www.amazon.com/dp/B08NVREXAMPLE',
      highlights: [`8 canaux`, `Accès distant`, `Raid/backup`],
      specs: { 'Entrées': '8 PoE', 'Stockage': '2 x SATA (max 16TB)', 'Sortie': 'HDMI' }
    },
    {
      id: 5,
      category: 'camera',
      title: `Caméra Discrete Bullet 2K`,
      description: `Bullet camera compacte, vision longue portée et weatherproof.`,
      price: '45 000 FCFA',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmontavue.com%2Fproducts%2F4mp-full-color-smart-dual-illumination-bullet-camera%3Fsrsltid%3DAfmBOoqdI-y8I0hK0vDgk1oKmBqGwyMd6IMl9PSBOdHMR6LrBrObVwxJ&psig=AOvVaw3HoPIFy3qyKLGmLLaCruIn&ust=1763760840074000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC_1aTXgZEDFQAAAAAdAAAAABAE',
      link: 'https://www.amazon.com/dp/B08BULLET',
      highlights: [`Longue portée`, `HD 2K`, `IP67`],
      specs: { 'Résolution': '2K', 'Portée IR': '40m', 'Indice': 'IP67' }
    }
  ];

  // Filtre appliqué (computed list)
  get visibleProducts(): Product[] {
    return this.filter === 'all' ? this.products : this.products.filter(p => p.category === this.filter);
  }

  // Ouvre le modal / détail
  openDetail(p: Product) {
    this.selectedProduct = p;
    // verrouiller scroll si besoin
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  // Scroll listener pour parallax du fond et léger mouvement hero
  @HostListener('window:scroll')
  onWindowScroll() {
    const sc = window.scrollY || window.pageYOffset;
    // on garde un offset réduit pour un effet subtil
    this.bgOffset = sc * 0.25;
    // on place une variable CSS sur root pour lier dans le scss
    (document.documentElement as any).style.setProperty('--bg-offset', `${this.bgOffset}px`);
  }

  // util (pour animation delay dans template)
  delayForIndex(i: number) {
    return `${0.06 * i}s`;
  }
}
