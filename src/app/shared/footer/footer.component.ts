import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  cols = [
    {
      title: 'Produits',
      links: ['Sécurité', 'Domotique', 'Énergie', 'Packs', 'Accessoires'],
    },
    {
      title: 'Services',
      links: ['Services', 'Support', 'Devis'],
    },
    {
      title: 'Boutique',
      links: ['Shop'],
    },
    {
      title: 'Contact',
      links: ['Contact', 'Recherche'],
    },
  ];
}
