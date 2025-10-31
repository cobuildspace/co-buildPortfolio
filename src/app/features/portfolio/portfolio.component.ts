import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioHeroComponent } from './portfolio-hero/portfolio-hero.component';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioHeroComponent,
    PortfolioGridComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

}
