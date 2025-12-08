import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { numberKey: 'about.stats.projects.number', labelKey: 'about.stats.projects.label' },
    { numberKey: 'about.stats.clients.number', labelKey: 'about.stats.clients.label' },
    { numberKey: 'about.stats.experience.number', labelKey: 'about.stats.experience.label' },
    { numberKey: 'about.stats.satisfaction.number', labelKey: 'about.stats.satisfaction.label' }
  ];

  values = [
    {
      icon: '🎯',
      titleKey: 'about.values.excellence.title',
      descKey: 'about.values.excellence.desc'
    },
    {
      icon: '🔒',
      titleKey: 'about.values.security.title',
      descKey: 'about.values.security.desc'
    },
    {
      icon: '💡',
      titleKey: 'about.values.innovation.title',
      descKey: 'about.values.innovation.desc'
    },
    {
      icon: '🤝',
      titleKey: 'about.values.trust.title',
      descKey: 'about.values.trust.desc'
    }
  ];

  team = [
    {
      name: 'Jean Dupont',
      roleKey: 'about.team.member1.role',
      image: 'assets/images/team/team1.jpg'
    },
    {
      name: 'Marie Diallo',
      roleKey: 'about.team.member2.role',
      image: 'assets/images/team/team2.jpg'
    },
    {
      name: 'Amadou Sow',
      roleKey: 'about.team.member3.role',
      image: 'assets/images/team/team3.jpg'
    },
    {
      name: 'Fatou Ndiaye',
      roleKey: 'about.team.member4.role',
      image: 'assets/images/team/team4.jpg'
    }
  ];
}
