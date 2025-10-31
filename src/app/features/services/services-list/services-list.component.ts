import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SectionHeaderComponent
  ],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent {
  onBookCall() {
    window.open('https://calendly.com/cobuild-space/30min', '_blank');
  }
}
