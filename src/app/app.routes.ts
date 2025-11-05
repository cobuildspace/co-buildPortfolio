// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Home | CoBuild',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | CoBuild',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then(
        (m) => m.ServicesComponent
      ),
    title: 'Services | CoBuild',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
    title: 'Portfolio | CoBuild',
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./features/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
    title: 'Testimonials | CoBuild',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Contact | CoBuild',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
