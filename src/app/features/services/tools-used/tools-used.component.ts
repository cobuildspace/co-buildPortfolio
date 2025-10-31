import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-tools-used',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SectionHeaderComponent
  ],
  templateUrl: './tools-used.component.html',
  styleUrl: './tools-used.component.css'
})
export class ToolsUsedComponent {
  onBookCall() {
    window.open('https://calendly.com/cobuild-space/30min', '_blank');
  }
}
