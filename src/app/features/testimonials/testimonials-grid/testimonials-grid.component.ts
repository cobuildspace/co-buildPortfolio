import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials-grid',
  imports: [],
  templateUrl: './testimonials-grid.component.html',
  styleUrl: './testimonials-grid.component.css'
})
export class TestimonialsGridComponent {
  constructor(private router: Router) {}
  onLearnMore(): void {
    this.router.navigate(['/about']);
}
}

