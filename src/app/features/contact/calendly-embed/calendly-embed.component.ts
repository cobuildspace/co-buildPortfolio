import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-calendly-embed',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ButtonComponent
  ],
  templateUrl: './calendly-embed.component.html',
  styleUrl: './calendly-embed.component.css'
})
export class CalendlyEmbedComponent {
  onBookMeeting() {
    window.open('https://calendly.com/cobuild-space/30min', '_blank');
  }
}
