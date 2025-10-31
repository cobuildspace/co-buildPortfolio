import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FeaturedServicesComponent } from './featured-services/featured-services.component';
import { QuickNavigationComponent } from './quick-navigation/quick-navigation.component';
import { TestimonialsGridComponent } from '../../features/testimonials/testimonials-grid/testimonials-grid.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    CtaSectionComponent,
    FeaturedServicesComponent,
    QuickNavigationComponent,
    TestimonialsGridComponent,
    FeaturedProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
