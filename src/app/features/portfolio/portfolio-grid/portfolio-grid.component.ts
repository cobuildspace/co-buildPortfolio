import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SectionHeaderComponent
  ],
  templateUrl: './portfolio-grid.component.html',
  styleUrl: './portfolio-grid.component.css'
})
export class PortfolioGridComponent {

}
