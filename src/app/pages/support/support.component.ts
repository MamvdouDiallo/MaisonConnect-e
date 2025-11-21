import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface SupportItem {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  supportItems: SupportItem[] = [
    { title: 'Assistance technique', description: 'Aide pour tous vos problèmes techniques.', icon: '/assets/icons/support.svg', link: '/support/technique' },
    { title: 'FAQ', description: 'Réponses aux questions les plus fréquentes.', icon: '/assets/icons/faq.svg', link: '/support/faq' },
    { title: 'Téléchargements', description: 'Accédez aux manuels et logiciels.', icon: '/assets/icons/download.svg', link: '/support/download' },
    { title: 'Contact direct', description: 'Envoyez-nous un message ou appelez notre équipe.', icon: '/assets/icons/contact.svg', link: '/contact' },
  ];

  form = { name: '', email: '', message: '' };

  submitForm() {
    console.log('Formulaire soumis', this.form);
    // ici tu peux appeler un service pour envoyer le message
  }

  delayForIndex(i: number) {
    return `${i * 0.1}s`;
  }
}
