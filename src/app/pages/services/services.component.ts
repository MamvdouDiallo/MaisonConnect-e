import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string; // lien vers une icône ou image
  link?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  query = '';
  filter = 'all';

  services: Service[] = [
    { title: 'Installation', description: 'Installation professionnelle de vos systèmes.', icon: '/assets/icons/installation.svg', link: '/services/installation' },
    { title: 'Maintenance', description: 'Maintenance et suivi régulier de vos équipements.', icon: '/assets/icons/maintenance.svg', link: '/services/maintenance' },
    { title: 'Support', description: 'Assistance technique et support client.', icon: '/assets/icons/support.svg', link: '/support' },
    { title: 'Devis personnalisé', description: 'Établissement de devis sur-mesure pour vos projets.', icon: '/assets/icons/devis.svg', link: '/devis' },
  ];

  get visibleServices(): Service[] {
    if (!this.query) return this.services;
    return this.services.filter(s => s.title.toLowerCase().includes(this.query.toLowerCase()));
  }

  delayForIndex(i: number) {
    return `${i * 0.1}s`;
  }
}
