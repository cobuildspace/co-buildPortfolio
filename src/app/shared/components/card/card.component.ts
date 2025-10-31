import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() variant: 'default' | 'elevated' | 'outlined' = 'default';
  @Input() padding: 'none' | 'small' | 'medium' | 'large' = 'medium';
  @Input() hoverable: boolean = false;
}
