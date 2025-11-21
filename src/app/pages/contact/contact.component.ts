import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };

  submitForm() {
    console.log('Formulaire Contact soumis', this.form);
    // ici tu peux appeler ton service pour envoyer le message
  }
}
