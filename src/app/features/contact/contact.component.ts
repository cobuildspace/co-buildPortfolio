import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CalendlyEmbedComponent } from './calendly-embed/calendly-embed.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactHeroComponent,
    ContactFormComponent,
    ContactInfoComponent,
    CalendlyEmbedComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
