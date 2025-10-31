import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-hero',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './contact-hero.component.html',
  styleUrl: './contact-hero.component.css'
})
export class ContactHeroComponent {

}
