import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.css'
})
export class AboutHeroComponent {
  constructor(private router: Router) {}

  onGetInTouch() {
    this.router.navigate(['/contact']);
  }
}
