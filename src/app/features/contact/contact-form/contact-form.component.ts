import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  onSubmit() {
    console.log('Form submitted!');
  }
}
